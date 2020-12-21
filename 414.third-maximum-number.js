/*
 * @lc app=leetcode id=414 lang=javascript
 *
 * [414] Third Maximum Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = function (nums) {
    nums = [...new Set(nums)]

    const firstIndex = findMax(nums)
    const firstNum = nums[firstIndex]
    nums.splice(firstIndex, 1)
  
    const secondIndex = findMax(nums)
    const secondNum = nums[secondIndex]
    nums.splice(secondIndex, 1)

    const thirdIndex = findMax(nums)
    const thirdNum = nums[thirdIndex]

    if(typeof thirdNum === 'number'){
        return thirdNum
    }else{
        return firstNum
    }
};

const findMax = (arr) => {
  let maxNum = -Infinity;
  let maxIndex = null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
      maxIndex = i;
    }
  }

  return maxIndex;
};

// @lc code=end
