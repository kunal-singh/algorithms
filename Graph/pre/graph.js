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

  Graph.prototype.DFS = function (vertex) {
    console.log(this.adjacencyMap);
    return [];
  };

  Graph.prototype.DFSIterative = function (vertex) {};

  Graph.prototype.BFS = function (vertex) {
    const BFS = [];

    return BFS;
  };

  return Graph;
})();

export default Graph;
