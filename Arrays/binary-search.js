const binarySearch = function (nums, target) {
  if (nums.length === 0) {
    console.log(`returning with 0 length`);
    return -1;
  }
  // if (nums.length === 1) return nums[0] === target ? 0 : -1;
  const middle = Math.floor(nums.length / 2);
  let index;
  console.log(nums, middle, '------');
  if (nums[middle] > target) {
    index = binarySearch(nums.slice(0, middle), target);
    console.log(
      `returning from first part`,
      index === -1 ? -1 : middle - index - 1
    );
    return index === -1 ? -1 : middle - index - 1;
  }
  if (nums[middle] < target) {
    index = binarySearch(nums.slice(middle + 1), target);
    console.log(
      `returning from second part`,
      index === -1 ? -1 : middle + index + 1
    );
    return index === -1 ? -1 : middle + index + 1;
  }
  console.log(`returning from middle found`, middle);
  return middle;
};

export default binarySearch;
