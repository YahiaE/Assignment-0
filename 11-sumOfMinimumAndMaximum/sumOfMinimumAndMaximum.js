function sumOfMinimumAndMaximum(nums) {
  let max = Math.max(...nums);
  let min = Math.min(...nums);
  return max+min;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;