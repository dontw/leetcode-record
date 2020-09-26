/*
 * @lc app=leetcode id=240 lang=javascript
 *
 * [240] Search a 2D Matrix II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

const searchMatrix = (matrix, target) => {
  if (matrix == null || matrix.length === 0) return false

  const h = matrix.length
  const w = matrix[0].length

  let i = 0
  let j = w - 1
  while (j >= 0 && i < h) {
    if (target === matrix[i][j]) return true
    else if (target < matrix[i][j]) j--
    else i++
  }
  return false
}
// @lc code=end
