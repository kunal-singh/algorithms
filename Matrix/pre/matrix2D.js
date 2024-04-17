const Matrix2D = (function () {
  // eslint-disable-next-line no-shadow
  function Matrix2D(rows, columns) {
    if (rows && columns) this.matrix = Array(rows).fill(Array(columns).fill(0));
  }

  Matrix2D.prototype.setMatrix = function (values) {
    if (!Array.isArray(values)) {
      throw new Error(`bad values`);
    }
    this.matrix = values;
    return this.matrix;
  };

  function BFSUtil() {}

  Matrix2D.prototype.BFS = function (coords) {
    const [i, j] = coords;
  };

  function DFSUtil() {}

  Matrix2D.prototype.DFS = function (coords) {
    const [i, j] = coords;
  };

  return Matrix2D;
})();

export default Matrix2D;
