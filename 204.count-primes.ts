/*
 * @lc app=leetcode id=204 lang=typescript
 *
 * [204] Count Primes
 */

// @lc code=start
function countPrimes(n: number): number {
    let count = 0;

    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {
            count++
        }
    }

    return count
}

function isPrime(num: number): boolean {
    const sqrtNum = Math.sqrt(num)

    for (var i = 2; i <= sqrtNum; i++) {
        if (num % i === 0) return false;
    }

    return num > 1;
}
// @lc code=end

