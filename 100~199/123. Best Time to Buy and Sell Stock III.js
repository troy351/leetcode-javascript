/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let hold1 = Number.MIN_SAFE_INTEGER, hold2 = hold1;
    let release1 = 0, release2 = 0;

    prices.forEach(v=> {
        release2 = Math.max(release2, hold2 + v);
        hold2 = Math.max(hold2, release1 - v);
        release1 = Math.max(release1, hold1 + v);
        hold1 = Math.max(hold1, -v);
    });

    return release2;
};