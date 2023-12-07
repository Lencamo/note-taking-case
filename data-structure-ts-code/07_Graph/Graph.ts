class Graph<T> {
  private vertexes: T[] = [] // 顶点
  private adjList: Map<T, T[]> = new Map() // 领接表

  // -----------------------
  // -----------------------

  // 添加顶点
  addVertex(vertex: T) {
    this.vertexes.push(vertex)
    this.adjList.set(vertex, [])
  }

  // 添加边
  addEdge(v1: T, v2: T) {
    this.adjList.get(v1)?.push(v2)
    this.adjList.get(v2)?.push(v1)
  }

  // 查看 图
  printGraph() {
    this.vertexes.forEach((vertex) => {
      const edges = this.adjList.get(vertex)

      console.log(`${vertex} -> ${edges?.join(' ')}`)
    })
  }

  // -----------------------
  // -----------------------

  // 广度优先搜索
  BFSTraverse(): T[] {
    const resultArr: T[] = []

    if (this.vertexes.length === 0) return []

    // 初始化队列
    const queue: T[] = []
    queue.push(this.vertexes[0]) // 随便指定第一个被访问的 顶点

    // 记录已访问的顶点
    const visited = new Set()
    visited.add(this.vertexes[0])

    // 若该顶点有 边，该顶点出队时将其 边对应的顶点入队
    while (queue.length) {
      const tempVertex = queue.shift()! // 出队
      resultArr.push(tempVertex)

      // 相邻的顶点
      const edgeVertexs = this.adjList.get(tempVertex)
      if (edgeVertexs) {
        for (const vertex of edgeVertexs) {
          if (!visited.has(vertex)) {
            visited.add(vertex)
            queue.push(vertex)
          }
        }
      } else {
        continue
      }
    }

    return resultArr
  }

  // 深度优先搜索
  DFSTraverse() {
    const resultArr: T[] = []

    if (this.vertexes.length === 0) return []

    // 初始化栈
    const stack: T[] = []
    stack.push(this.vertexes[0]) // 随便指定第一个被访问的 顶点

    // 记录已访问的顶点
    const visited = new Set()
    visited.add(this.vertexes[0])

    // 若该顶点有 边，该顶点出栈时将其 边对应的顶点入栈
    while (stack.length) {
      const tempVertex = stack.pop()! // 出栈
      resultArr.push(tempVertex)

      // 相邻的顶点
      const edgeVertexs = this.adjList.get(tempVertex)
      if (edgeVertexs) {
        // 反方向入栈（后续就可以正方向出栈了）
        for (let i = edgeVertexs.length - 1; i >= 0; i--) {
          const vertex = edgeVertexs[i]

          if (!visited.has(vertex)) {
            visited.add(vertex)
            stack.push(vertex)
          }
        }
      } else {
        continue
      }
    }

    return resultArr
  }
}

export default Graph
