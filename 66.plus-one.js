/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const length = digits.length;

  digits[length - 1] += 1;

  for (let i = length - 1; i >= 0; i--) {
    if (digits[i] > 9) {
      digits[i] = 0;

      if (digits[i - 1]) {
        digits[i - 1] += 1;
      } else {
        digits.unshift(1);
        break;
      }
    }
  }
  return digits;
};
// @lc code=end
