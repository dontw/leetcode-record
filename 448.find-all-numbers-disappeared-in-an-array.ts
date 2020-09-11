/*
 * @lc app=leetcode id=448 lang=typescript
 *
 * [448] Find All Numbers Disappeared in an Array
 */

// @lc code=start
function findDisappearedNumbers(nums: number[]): number[] {
  const result = []
  for (let i = 1; i <= nums.length; i++) {
    if (!includes(nums, i)) {
      result.push(i)
    }
  }

  return result
}

function includes(nums: number[], target:number) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return true
    }
  }

  return false
}

// @lc code=end
