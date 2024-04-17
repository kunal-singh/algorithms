const Matrix2D = (function () {
  // eslint-disable-next-line no-shadow
  function Matrix2D(rows, columns) {
    this.vectors = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1]
    ];
    this.visited = new Map();
    if (rows && columns) this.matrix = Array(rows).fill(Array(columns).fill(0));
  }

  Matrix2D.prototype.setMatrix = function (values) {
    if (!Array.isArray(values)) {
      throw new Error(`bad values`);
    }
    this.matrix = values;
    return this.matrix;
  };

  function isValidCoords(i, j) {
    if (
      i < 0 ||
      j < 0 ||
      i >= this.matrix.length ||
      j >= this.matrix[0].length ||
      this.visited.has(`${i}-${j}`)
    ) {
      return false;
    }
    return true;
  }

  function BFSUtil(i, j) {}

  Matrix2D.prototype.BFS = function (coords) {
    const [i, j] = coords;
    this.visited = new Map();
    BFSUtil.call(this, i, j);
  };

  function DFSUtil(i, j) {
    console.log(i, j, this.matrix, this.vectors);
  }

  Matrix2D.prototype.DFS = function (coords) {
    const [i, j] = coords;
    this.visited = new Map();
    DFSUtil.call(this, i, j);
  };

  return Matrix2D;
})();

export default Matrix2D;
