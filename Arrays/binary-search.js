const binarySearch = function (nums, target) {
  if (nums.length === 1) return nums[0] === target ? 0 : -1;
  const middle = Math.floor(nums.length / 2);
  let index;
  console.log(nums[middle], middle, '----------');
  if (nums[middle] > target) {
    console.log('found greater', nums.slice(0, middle));
    index = binarySearch(nums.slice(0, middle), target);
  } else if (nums[middle] < target) {
    console.log('found lesser', nums.slice(middle));
    index = binarySearch(nums.slice(middle), target);
  } else {
    console.log(`found`);
    return middle;
  }
  console.log(`returning`, index === -1 ? -1 : middle + index);
  return index === -1 ? -1 : middle + index;
};

export default binarySearch;
