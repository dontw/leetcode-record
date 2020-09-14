/*
 * @lc app=leetcode id=509 lang=typescript
 *
 * [509] Fibonacci Number
 */

// @lc code=start
function fib(num: number): number {
  if (num <= 1) return num
  
  return fib(num - 1) + fib(num - 2)
};
// @lc code=end

