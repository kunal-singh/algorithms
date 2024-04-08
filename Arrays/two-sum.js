function TwoSum(nums, target) {
  const sumValues = [];
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[i] + nums[j] === target) {
        sumValues.push(...[i, j]);
      }
    }
  }
  return sumValues.length ? sumValues : null;
}

export default TwoSum;
