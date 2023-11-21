import Graph from '../Graph'

const graph = new Graph()

// 批量添加顶点A-I
for (let i = 65; i < 74; i++) {
  graph.addVertex(String.fromCharCode(i))
}

// 批量添加 边
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('E', 'I')

// 查看图
graph.printGraph()

// 图遍历
console.log('BFS广度优先搜索', graph.BFSTraverse())
console.log('DFS深度优先搜索', graph.DFSTraverse())
