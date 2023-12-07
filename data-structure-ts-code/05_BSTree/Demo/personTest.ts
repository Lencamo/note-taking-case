/**
 * 这里是一个 模拟真实应用场景 的一个案例测试
 * （我们不传数字，传入Person）
 */

import BSTree from '../BSTree'
// 打印工具
import { printBSTree } from '../utils/printTree'

// 数据
class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  valueOf() {
    return this.age
  }
}

// 此时可以基于Person的age进行比较了
const zhangsan = new Person('zhangsan', 27)
const wangwu = new Person('wangwu', 25)

// console.log(zhangsan < wangwu) // false

// 二叉搜索树使用
const bst = new BSTree<Person>()

bst.insert(new Person('zhangsan', 45))
bst.insert(new Person('lisi', 27))
bst.insert(new Person('wangwu', 88))
bst.insert(new Person('wuming', 33))
bst.insert(new Person('zhaoyun', 20))

printBSTree(bst.rootNode)
