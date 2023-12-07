## LinkedList

&emsp;&emsp;单向链表

## Circular-LinkedList

循环链表：

> 在 LinkedList 的基础上 添加了 tail（始终指向末尾节点）

&emsp;&emsp;然后在 append、insert、removeByIndex 方法中 指定的时机添加：

```ts
this.tail!.next = this.head
```

## Doubly-LinkedList

双向链表：

> 在 LinkedList 的基础上 添加了 tail（始终指向末尾节点） 、LinkedListNode 节点中新增 prev（用于指向前一个节点）

&emsp;&emsp;然后重写 append、insert、removeByIndex 方法，并新增 prepend、postTraverse 方法
