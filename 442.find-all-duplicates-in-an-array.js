/*
 * @lc app=leetcode id=442 lang=javascript
 *
 * [442] Find All Duplicates in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    let ans = []
    for(let i = 0; i < nums.length; i++){
        let index = Math.abs(nums[i]) - 1

        if(nums[index] > 0) {
            nums[index] = nums[index] * -1
        }else{
            ans.push(Math.abs(nums[i]))
        }
    }

    return ans
};
// @lc code=end
