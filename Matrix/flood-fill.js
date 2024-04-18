function isValidCoords(i, j, image, visited, color) {
  if (
    i < 0 ||
    j < 0 ||
    i >= image.length ||
    j >= image[0].length ||
    visited.includes(`${i}-${j}`) ||
    image[i][j] !== color
  ) {
    return false;
  }
  return true;
}
const floodFill = function (image, sr, sc, color) {
  const dVectors = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
  ];
  const visited = [];
  const queue = [];
  queue.push([sr, sc]);
  const startingPixelColor = image[sr][sc];
  while (queue.length) {
    const [row, col] = queue.shift();
    if (
      isValidCoords.call(this, row, col, image, visited, startingPixelColor)
    ) {
      // eslint-disable-next-line no-param-reassign
      image[row][col] = color;
      visited.push(`${row}-${col}`, true);
      dVectors.forEach((element) => {
        queue.push([row + element[0], col + element[1]]);
      });
    }
  }
  return image;
};

export default floodFill;
