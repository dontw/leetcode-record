/*
 * @lc app=leetcode id=1572 lang=javascript
 *
 * [1572] Matrix Diagonal Sum
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  const height = mat.length
  const width = mat[0].length

  let result = 0

  for (let i = 0; i < width; i++) {
    result += mat[i][i]
    result += mat[i][width - 1 - i]
  }

  if (width & (2 !== 0)) {
    result -= mat[Math.round(width - 1) / 2][Math.round(height - 1) / 2]
  }
  return result
}
// @lc code=end
