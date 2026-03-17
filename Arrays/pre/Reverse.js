const Reverse = function (array) {
  if (!Array.isArray(array)) {
    throw new Error('Input must be an array');
  }
  const temp = [];
  let b = array.length - 1;

  while (b >= 0) {
    temp[temp.length] = array[b];
    b -= 1;
  }

  return temp;
};
export default Reverse;
