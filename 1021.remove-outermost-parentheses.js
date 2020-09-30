/*
 * @lc app=leetcode id=1021 lang=javascript
 *
 * [1021] Remove Outermost Parentheses
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
  let stack = [] 
  let result = []

  S.split("").forEach((item) => {
    if (item === ")") {
        stack.splice(stack.length - 1, 1)
    }
    if (stack.length) {
      result.push(item)
    }
    if (item === "(") {
        stack.push(item)
    }
  })

  return result.join("")
}
// @lc code=end
