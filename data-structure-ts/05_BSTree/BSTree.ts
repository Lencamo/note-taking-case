import { ITreeNode } from '../types/INode'

class TreeNode<T> implements ITreeNode<T> {
  element: T
  left: TreeNode<T> | null = null
  right: TreeNode<T> | null = null

  // 在删除节点时使用
  parent: ITreeNode<T> | null = null
  get isLeft(): boolean {
    return !!(this.parent && this.parent.left === this)
  }
  get isRight(): boolean {
    return !!(this.parent && this.parent.right === this)
  }

  constructor(element: T) {
    this.element = element
  }
}

class BSTree<T> {
  private root: TreeNode<T> | null = null

  // 供打印树结构使用
  get rootNode(): TreeNode<T> | null {
    return this.root
  }

  // -----------------------
  // -----------------------

  // 递归插入新节点
  private insertNode(rootNode: TreeNode<T>, newNode: TreeNode<T>) {
    // 判断是否放在 左子树上
    if (newNode.element < rootNode.element) {
      // 判断左子树上 是否有TreeNode节点
      if (rootNode.left !== null) {
        this.insertNode(rootNode.left, newNode)
      } else {
        rootNode.left = newNode // 成功插入TreeNode节点
      }
    } else {
      if (rootNode.right !== null) {
        this.insertNode(rootNode.right, newNode)
      } else {
        rootNode.right = newNode // 成功插入TreeNode节点
      }
    }
  }

  // 插入新节点
  insert(element: T) {
    const newNode = new TreeNode(element)

    // 是否为空树
    if (this.root === null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  // -----------------------
  // -----------------------

  // 先序遍历
  preOderTraverse(): T[] {
    const resultArr: T[] = []

    // 递归也是一个调用栈
    function traverseBSTree(rootNode: TreeNode<T> | null) {
      if (rootNode) {
        resultArr.push(rootNode.element) // 先打印 rootNode 根节点
        traverseBSTree(rootNode.left) // 打印 左子树节点
        traverseBSTree(rootNode.right) // 打印 右子树节点
      }
    }
    traverseBSTree(this.root)

    return resultArr
  }

  // 中序遍历
  inOrderTraverse(): T[] {
    const resultArr: T[] = []

    // 递归也是一个调用栈
    function traverseBSTree(rootNode: TreeNode<T> | null) {
      if (rootNode) {
        traverseBSTree(rootNode.left) // 打印 左子树节点
        resultArr.push(rootNode.element) // 先打印 rootNode 根节点
        traverseBSTree(rootNode.right) // 打印 右子树节点
      }
    }
    traverseBSTree(this.root)

    return resultArr
  }

  // 后序遍历
  postOrderTraverse(): T[] {
    const resultArr: T[] = []

    // 递归也是一个调用栈
    function traverseBSTree(rootNode: TreeNode<T> | null) {
      if (rootNode) {
        traverseBSTree(rootNode.left) // 打印 左子树节点
        traverseBSTree(rootNode.right) // 打印 右子树节点
        resultArr.push(rootNode.element) // 先打印 rootNode 根节点
      }
    }
    traverseBSTree(this.root)

    return resultArr
  }

  // 层序遍历
  levelOrderTraverse(): T[] {
    const resultArr: T[] = []

    if (!this.root) return []

    // 初始化队列
    const queue: TreeNode<T>[] = []
    queue.push(this.root) // 入队

    // 若有子节点，出队时先将其左右子节点入队
    while (queue.length) {
      // 记录将要出队的 TreeNode
      const temp = queue.shift()!
      resultArr.push(temp?.element) // 打印节点

      // 将其左右子节点入队
      if (temp.left) {
        queue.push(temp.left)
      }
      if (temp.right) {
        queue.push(temp.right)
      }
    }

    return resultArr
  }

  // -----------------------
  // -----------------------

  getMaxElement(): T | null {
    let temp = this.root

    while (temp !== null && temp.right) {
      temp = temp.right
    }

    return temp?.element ?? null
  }

  getMixElement(): T | null {
    let temp = this.root

    while (temp && temp.left) {
      temp = temp.left
    }

    return temp?.element ?? null
  }

  // -----------------------
  // -----------------------

  private searchNode(checkElement: T): TreeNode<T> | null {
    let currentNode = this.root
    let parentNode: TreeNode<T> | null = null

    while (currentNode !== null) {
      if (currentNode.element === checkElement) return currentNode

      // 记录当前节点
      parentNode = currentNode

      // 下移到子节点
      if (currentNode.element < checkElement) {
        currentNode = currentNode.right
      } else {
        currentNode = currentNode.left
      }

      // 追加子节点的parent信息
      if (currentNode) currentNode.parent = parentNode
    }

    return null
  }

  getElement(checkElement: T): boolean {
    const isExist = !!this.searchNode(checkElement)

    return isExist
  }

  removeElement(targetElement: T): boolean {
    // 删除的是根节点
    if (targetElement === this.root?.element) {
      this.root = null
      return true
    }

    // -------

    const currentNode = this.searchNode(targetElement)
    if (currentNode === null) return false

    // 删除的是叶子节点
    if (currentNode.left === null && currentNode.right === null) {
      if (currentNode.isLeft) currentNode.parent!.left = null
      if (currentNode.isRight) currentNode.parent!.right = null
    }
    // 删除的节点有一个子节点（左子节点）
    else if (currentNode.right === null) {
      if (currentNode.isLeft) currentNode.parent!.left = currentNode.left
      if (currentNode.isRight) currentNode.parent!.right = currentNode.left
    }
    // 删除的节点有一个子节点（右子节点）
    else if (currentNode.left === null) {
      if (currentNode.isLeft) currentNode.parent!.left = currentNode.right
      if (currentNode.isRight) currentNode.parent!.right = currentNode.right
    }

    return true
  }
}

export default BSTree
