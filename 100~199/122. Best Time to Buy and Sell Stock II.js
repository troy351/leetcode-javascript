/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0;

    for (let i = 0; i < prices.length - 1; i++) {
        profit += Math.max(prices[i + 1] - prices[i], 0);
    }

    return profit;
};