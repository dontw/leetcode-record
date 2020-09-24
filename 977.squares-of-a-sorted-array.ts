/*
 * @lc app=leetcode id=977 lang=typescript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
function sortedSquares(A: number[]): number[] {
    return A.map(number => Math.abs(number)**2).sort((a,b) => a - b)
};
// @lc code=end

