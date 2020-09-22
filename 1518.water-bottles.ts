/*
 * @lc app=leetcode id=1518 lang=typescript
 *
 * [1518] Water Bottles
 */

// @lc code=start
function numWaterBottles(numBottles: number, numExchange: number): number {
  if (numBottles < numExchange) return numBottles
  return (
    numExchange + numWaterBottles(numBottles - numExchange + 1, numExchange)
  )
}
// @lc code=end
