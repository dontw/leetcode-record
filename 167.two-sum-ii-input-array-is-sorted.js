/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input array is sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let startIndex = 0;
  let endIndex = numbers.length - 1;

  while(startIndex < endIndex) {
    if(numbers[startIndex] + numbers[endIndex] === target) {
      return [startIndex + 1, endIndex + 1];
    }

    if(numbers[startIndex] + numbers[endIndex] < target) {
      startIndex++;
    }

    if(numbers[startIndex] + numbers[endIndex] > target) {
      endIndex--
    }
  }
};
// @lc code=end

