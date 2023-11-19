import BSTree from '../BSTree'
// 打印工具
import { printBSTree } from '../utils/printTree'

const bst = new BSTree()

bst.insert(8)
bst.insert(3)
bst.insert(10)
bst.insert(1)
bst.insert(6)
bst.insert(7)
bst.insert(4)
bst.insert(14)
bst.insert(13)

// 查看二叉搜索树
printBSTree(bst.rootNode)

// // 遍历二叉搜索树
// console.log('先序遍历', bst.preOderTraverse())
// console.log('中序遍历', bst.inOrderTraverse())
// console.log('后序遍历', bst.postOrderTraverse())

// console.log('层序遍历', bst.levelOrderTraverse())

// // 二叉搜索树的最值
// console.log('最大值', bst.getMaxElement())
// console.log('最小值', bst.getMixElement())

// // 查找二叉搜索树中的某个值
// console.log(bst.getElement(6))
// console.log(bst.getElement(5))

// 删除二叉搜索树节点
// bst.removeElement(8)
// printBSTree(bst.rootNode)

// bst.removeElement(1)
// bst.removeElement(13)
// printBSTree(bst.rootNode)

// bst.removeElement(14)
// bst.removeElement(10)
// printBSTree(bst.rootNode)

// bst.removeElement(6)
// printBSTree(bst.rootNode)
