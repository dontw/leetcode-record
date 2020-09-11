/*
 * @lc app=leetcode id=628 lang=typescript
 *
 * [628] Maximum Product of Three Numbers
 */

// @lc code=start
function maximumProduct(nums: number[]): number {
  const maxTopThree = []
  const minTopTwo = []
  const copyNums = [...nums]

  for (let i = 0; i < 3; i++) {
    const maxNumIndex = findMaxIndex(nums)
    const maxNum = nums[maxNumIndex]
    nums.splice(maxNumIndex, 1)
    maxTopThree.push(maxNum)
  }

  for (let i = 0; i < 2; i++) {
    const minNumIndex = findMinIndex(copyNums)
    const minNum = copyNums[minNumIndex]
    copyNums.splice(minNumIndex, 1)
    minTopTwo.push(minNum)
  }

  const resultA = maxTopThree[0] * maxTopThree[1] * maxTopThree[2]
  const resultB = maxTopThree[0] * minTopTwo[0] * minTopTwo[1]

  return resultA >= resultB ? resultA : resultB
}

function findMaxIndex(nums: number[]): number {
  let maxNum = -Infinity
  let maxIndex = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > maxNum) {
      maxNum = nums[i]
      maxIndex = i
    }
  }
  return maxIndex
}

function findMinIndex(nums: number[]): number {
  let minNum = Infinity
  let minIndex = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < minNum) {
      minNum = nums[i]
      minIndex = i
    }
  }
  return minIndex
}
// @lc code=end
