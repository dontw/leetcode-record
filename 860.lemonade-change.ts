/*
 * @lc app=leetcode id=860 lang=typescript
 *
 * [860] Lemonade Change
 */

// @lc code=start
function lemonadeChange(bills: number[]): boolean {
    let change = {
        five: 0,
        ten: 0,
        twenty: 0
    }

    for (let i = 0; i < bills.length; i++) {
        switch (bills[i]) {
            case 5:
                change.five++
                break
            case 10:
                if (change.five < 1) return false
                change.five--
                change.ten++
                break
            case 20:
                if (change.ten >= 1 && change.five >= 1) {
                    change.twenty++
                    change.ten--
                    change.five--
                    break
                }
                else if (change.five >= 3) {
                    change.twenty++
                    change.five -= 3
                    break
                }
                return false
        }
    }

    return true
};
// @lc code=end
