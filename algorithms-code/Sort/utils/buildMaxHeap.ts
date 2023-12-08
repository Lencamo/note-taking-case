// 注意：这里的下滤操作中，arr是动态变化的
export function heapify_down(start: number, data: number[], length: number) {
  let elementIndex = start

  // 没有左子节点结束
  while (2 * elementIndex + 1 <= length - 1) {
    let leftChildIndex = 2 * elementIndex + 1
    let rightChildIndex = leftChildIndex + 1

    // 待交换目标index（左右子树的较大者）
    let largerIndex = leftChildIndex
    if (rightChildIndex < length && data[rightChildIndex] >= data[leftChildIndex]) {
      largerIndex = rightChildIndex
    }

    // 判断是否 中途到底
    if (data[elementIndex] >= data[largerIndex]) break

    // 交换位置
    const temp = data[elementIndex]
    data[elementIndex] = data[largerIndex]
    data[largerIndex] = temp

    elementIndex = largerIndex // 记录值更新
  }
}
