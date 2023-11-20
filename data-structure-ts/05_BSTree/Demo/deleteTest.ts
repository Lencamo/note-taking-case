import BSTree from '../BSTree'
// 打印工具
import { printBSTree } from '../utils/printTree'

const bst = new BSTree()

bst.insert(11)
bst.insert(7)
bst.insert(15)
bst.insert(5)
bst.insert(9)
bst.insert(13)
bst.insert(20)
bst.insert(3)
bst.insert(8)
bst.insert(10)
bst.insert(12)
bst.insert(14)
bst.insert(18)
bst.insert(25)
bst.insert(19)

// 查看二叉搜索树
printBSTree(bst.rootNode)

// 删除的是叶子节点
// bst.removeElement(3)

// 删除的节点有一个子节点
// bst.removeElement(5) // 有一个左子节点
// bst.removeElement(18) // 有一个右子节点

// 删除的节点有两个子节点
// bst.removeElement(7) // 后继节点为叶子节点
// bst.removeElement(9)
bst.removeElement(15) // 后继节点有右子节点
// bst.removeElement(18)

printBSTree(bst.rootNode)
