const search = function (arr, l, r, x) {
  if (r >= l) {
    const mid = l + Math.floor((r - l) / 2);

    if (arr[mid] === x) return mid;

    if (arr[mid] > x) return search(arr, l, mid - 1, x);

    return search(arr, mid + 1, r, x);
  }
  return -1;
};

const binarySearch = function (nums, target) {
  return search(nums, 0, nums.length - 1, target);
};

export default binarySearch;
