/*
 * @lc app=leetcode id=1323 lang=javascript
 *
 * [1323] Maximum 69 Number
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
 const arr = num.toString().split("")    
 
 for(let i = 0; i < arr.length; i++){
     if(Number(arr[i]) === 6) {
         arr.splice(i, 1, 9)
         break
     }
 }

 return Number(arr.join(""))
};
// @lc code=end

