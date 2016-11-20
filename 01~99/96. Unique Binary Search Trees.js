/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
    if (n <= 0) return 0;

    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            dp[i] += dp[j] * dp[i - 1 - j];
        }
    }

    return dp[n];
};