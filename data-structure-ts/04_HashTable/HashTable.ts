class HashTable<T = any> {
  // 数组的用于链式存储bucket的链（数组）
  private buckets: [string, T][][] = []
  // 数组中已存放的bucket个数
  private count: number = 0

  // 数组的长度
  private length: number = 7

  // 提示：填充因子 loadFactor = count / length，当loadFactor>0.75时，我们会进行扩容操作

  // -----------------------
  // -----------------------

  // 根据 key 生成对应的 hashIndex索引
  private generateHashIndex(key: string, length: number = 7): number {
    let hashCode = 0

    for (let i = 0; i < key.length; i++) {
      // 霍纳法则
      hashCode = 31 * hashCode + key.charCodeAt(i) // 使用的是ASCII码
    }

    const hashIndex = hashCode % length

    return hashIndex
  }

  // 根据指定的newLength长度进行 扩容/缩容 操作
  private resizeChange(newLength: number) {
    const oldBuckets = this.buckets
    let newPrime = newLength

    // newLength 最小值约束
    if (newPrime < 7) newPrime = 7

    // 确保传入的是一个质数
    while (!this.isNewLengthPrime(newPrime)) {
      newPrime++
    }

    // console.log('采用的newLength为：', newPrime)
    this.length = newPrime
    this.buckets = []
    this.count = 0

    // 重新存放数据
    oldBuckets.forEach((bucket) => {
      if (!bucket) return

      for (let i = 0; i < bucket.length; i++) {
        const tuple = bucket[i]
        this.put(tuple[0], tuple[1])
      }
    })
  }

  // 判断传入的newLength是否为质数
  private isNewLengthPrime(newLength: number) {
    const sqrt = Math.sqrt(newLength)
    for (let i = 2; i <= sqrt; i++) {
      // 判断是否能被除了 1 和 sqrt 以外的数 整除
      if (newLength % i === 0) {
        return false
      }
    }

    return true
  }

  // -----------------------
  // -----------------------

  // 1、插入/修改
  put(key: string, value: T) {
    // 生成hashIndex索引
    const index = this.generateHashIndex(key, this.length)
    // 找到对应的bucket
    let bucket = this.buckets[index]

    // 1、bucket无值的情况 -- 判断bucket是否有值（判断是否链式追加）
    if (bucket === undefined) {
      bucket = []
      this.buckets[index] = bucket
    }

    // 2、更新key的情况 -- 判断是追加还是覆盖
    let isUpdate = false
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i]
      const tupleKey = tuple[0]

      if (tupleKey === key) {
        tuple[1] = value
        isUpdate = true // 标记一下
      }
    }

    // 3、新增key的情况 -- 判断是追加还是覆盖
    if (!isUpdate) {
      bucket.push([key, value])
      this.count++

      // 是否进行扩容操作
      const loadFactor = this.count / this.length
      if (loadFactor > 0.75) {
        // console.log('扩容前的buckets：', this.buckets)
        this.resizeChange(this.length * 2)
        // console.log('扩容后的buckets：', this.buckets)
      }
    }
  }

  // 2、获取
  get(key: string): T | undefined {
    // 生成hashIndex索引
    const index = this.generateHashIndex(key, this.length)
    // 找到对应的bucket
    let bucket = this.buckets[index]

    // 1、bucket无值的情况
    if (bucket === undefined) return undefined

    // 2、遍历bucket
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i]
      const tupleKey = tuple[0]

      if (tupleKey === key) {
        return tuple[1]
      }
    }
  }

  // 3、删除
  delete(key: string): T | undefined {
    // 生成hashIndex索引
    const index = this.generateHashIndex(key, this.length)
    // 找到对应的bucket
    let bucket = this.buckets[index]

    // 2、遍历bucket
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i]
      const tupleKey = tuple[0]

      if (tupleKey === key) {
        bucket.splice(i, 1)
        this.count--

        // 是否进行缩容操作
        const loadFactor = this.count / this.length
        if (loadFactor < 0.25 && this.length > 7) {
          // console.log('缩容前的buckets：', this.buckets)
          this.resizeChange(Math.floor(this.length / 2))
          // console.log('缩容后的buckets：', this.buckets)
        }

        return tuple[1]
      }
    }
  }
}

export default HashTable
