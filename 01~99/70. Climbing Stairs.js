/**
 * Just Fibonacci numbers
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    const step = [1, 1];
    for (let i = 2; i <= n; i++) step[i] = step[i - 1] + step[i - 2];
    return step[n];
};