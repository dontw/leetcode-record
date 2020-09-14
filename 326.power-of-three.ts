/*
 * @lc app=leetcode id=326 lang=typescript
 *
 * [326] Power of Three
 */

// @lc code=start
function isPowerOfThree(n: number): boolean {
  return isInt(log(3, n))
}

function log(base: number, value: number):number {
  return Number((Math.log(value) / Math.log(base)).toFixed(10))
}

function isInt(value: number): boolean {
  return value % 1 === 0
}
// @lc code=end
