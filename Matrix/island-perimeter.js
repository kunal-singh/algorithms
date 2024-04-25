const dVectors = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1]
];
function isValidCoords(i, j, grid, visited) {
  if (
    i < 0 ||
    j < 0 ||
    i >= grid.length ||
    j >= grid[0].length ||
    visited.includes(`${i}-${j}`)
  ) {
    return false;
  }
  return true;
}

function calculatePerimeter(grid, row, col) {
  if (grid[row][col] === 0) return 0;
  let p = 0;
  dVectors.forEach((vector) => {
    const dRow = row + vector[0];
    const dCol = col + vector[1];
    if (
      dRow < 0 ||
      dCol < 0 ||
      dRow >= grid.length ||
      dCol >= grid[0].length ||
      grid[dRow][dCol] === 0
    ) {
      p += 1;
    }
  });
  return p;
}

const islandPerimeter = function (grid) {
  const visited = [];
  const queue = [];
  let perimeter = 0;
  queue.push([0, 0]);
  while (queue.length) {
    const [row, col] = queue.shift();
    if (isValidCoords.call(this, row, col, grid, visited)) {
      // eslint-disable-next-line no-param-reassign
      perimeter += calculatePerimeter(grid, row, col);
      visited.push(`${row}-${col}`, true);
      dVectors.forEach((element) => {
        queue.push([row + element[0], col + element[1]]);
      });
    }
  }
  return perimeter;
};

export default islandPerimeter;
