import Queue from '../../Queue/pre/queue.js';
import Stack from '../../Stack/pre/stack.js';

const Graph = (function () {
  function Graph() {
    this.adjacencyMap = new Map();
  }

  Graph.prototype.addVertex = function (vertex) {
    if (vertex && !this.adjacencyMap.get(vertex)) {
      this.adjacencyMap.set(vertex, []);
    }
  };

  Graph.prototype.addEdge = function (v1, v2) {
    if (v1 && v2 && this.adjacencyMap.has(v1) && this.adjacencyMap.has(v2)) {
      const v1Edges = this.adjacencyMap.get(v1);
      const v2Edges = this.adjacencyMap.get(v2);
      if (Array.isArray(v1Edges) && !v1Edges.includes(v2)) {
        v1Edges.push(v2);
      }
      if (Array.isArray(v2Edges) && !v2Edges.includes(v1)) {
        v2Edges.push(v1);
      }
    }
  };

  Graph.prototype.removeVertex = function (vertex) {
    if (this.adjacencyMap.has(vertex)) {
      this.adjacencyMap.delete(vertex);
      // eslint-disable-next-line no-restricted-syntax
      for (const key of this.adjacencyMap.keys()) {
        this.adjacencyMap.set(
          key,
          this.adjacencyMap.get(key).filter((v) => v !== vertex)
        );
      }
    }
  };

  function DFSUtil(adjacencyMap, vertex, visited) {
    if (visited.has(vertex)) return [];
    const DFS = [];
    visited.set(vertex, true);
    DFS.push(vertex);
    adjacencyMap.get(vertex).forEach((el) => {
      DFS.push(...DFSUtil(adjacencyMap, el, visited));
    });
    return DFS;
  }

  Graph.prototype.DFS = function (vertex) {
    return DFSUtil(this.adjacencyMap, vertex, new Map());
  };

  Graph.prototype.DFSIterative = function (vertex) {
    const DFS = [];
    const stack = new Stack();
    const visited = new Map();
    stack.push(vertex);
    while (stack.size()) {
      const element = stack.pop();
      if (!visited.has(element)) {
        DFS.push(element);
        visited.set(element, true);
        this.adjacencyMap.get(element).forEach((el) => {
          stack.push(el);
        });
      }
    }
    return DFS;
  };

  Graph.prototype.BFS = function (vertex) {
    const BFS = [];
    const queue = new Queue();
    const visited = new Map();
    queue.enqueue(vertex);
    while (queue.size()) {
      const element = queue.dequeue();
      if (!visited.has(element)) {
        BFS.push(element);
        visited.set(element, true);
        this.adjacencyMap.get(element).forEach((el) => {
          queue.enqueue(el);
        });
      }
    }
    return BFS;
  };

  return Graph;
})();

export default Graph;
