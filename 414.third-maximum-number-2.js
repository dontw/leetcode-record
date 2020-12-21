/*
 * @lc app=leetcode id=414 lang=javascript
 *
 * [414] Third Maximum Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = function (nums) {
  let first = nums[0];
  let second = -Infinity;
  let third = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    // pass same number
    if(nums[i] === first || nums[i] === second || nums[i] === third) {
      continue
    }

    if (nums[i] > first) {
      third = second;
      second = first;
      first = nums[i];
    } else if (nums[i] > second) {
      third = second;
      second = nums[i];
    } else if (nums[i] > third) {
      third = nums[i];
    }
  }

  return third === -Infinity ? first : third;
};

// @lc code=end
