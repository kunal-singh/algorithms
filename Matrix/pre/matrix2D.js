import Queue from '../../Queue/pre/queue.js';
import Stack from '../../Stack/pre/stack.js';

const Matrix2D = (function () {
  // eslint-disable-next-line no-shadow
  function Matrix2D(rows, columns) {
    this.vectors = [
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1]
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

  function reset() {
    this.visited = new Map();
  }

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

  function BFSUtil(i, j) {
    const BFS = [];
    const queue = new Queue();
    queue.enqueue([i, j]);
    while (queue.size()) {
      const [row, col] = queue.dequeue();
      if (isValidCoords.call(this, row, col)) {
        BFS.push(this.matrix[row][col]);
        this.visited.set(`${row}-${col}`, true);
        this.vectors.forEach((element) => {
          queue.enqueue([row + element[0], col + element[1]]);
        });
      }
    }

    return BFS;
  }

  Matrix2D.prototype.BFS = function (coords) {
    const [i, j] = coords;
    reset.call(this);
    return BFSUtil.call(this, i, j);
  };

  function DFSUtil(i, j) {
    const DFS = [];
    const stack = new Stack();
    stack.push([i, j]);
    while (stack.size()) {
      const [row, col] = stack.pop();
      if (isValidCoords.call(this, row, col)) {
        DFS.push(this.matrix[row][col]);
        this.visited.set(`${row}-${col}`, true);
        this.vectors.forEach((element) => {
          stack.push([row + element[0], col + element[1]]);
        });
      }
    }

    return DFS;
  }

  Matrix2D.prototype.DFS = function (coords) {
    const [i, j] = coords;
    reset.call(this);
    return DFSUtil.call(this, i, j);
  };

  return Matrix2D;
})();

export default Matrix2D;
