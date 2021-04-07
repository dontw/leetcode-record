/*
 * @lc app=leetcode id=485 lang=javascript
 *
 * [485] Max Consecutive Ones
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  const arr = nums.join("").split(0);
  let num = 0;
  for(let i =0; i < arr.length; i++) {
    if(num < arr[i].length) {
      num = arr[i].length
    }
  }
  return num;
};
// @lc code=end
