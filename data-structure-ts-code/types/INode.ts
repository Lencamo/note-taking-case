interface INode<T> {
  element: T
}

export interface ITreeNode<T> extends INode<T> {
  left: ITreeNode<T> | null
  right: ITreeNode<T> | null

  parent: ITreeNode<T> | null
}
