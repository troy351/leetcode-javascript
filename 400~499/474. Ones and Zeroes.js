/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

    strs.forEach(s => {
        const zero = s.split('0').length - 1;
        const one = s.length - zero;
        for (let i = m; i >= zero; i--)
            for (let j = n; j >= one; j--)
                dp[i][j] = Math.max(1 + dp[i - zero][j - one], dp[i][j]);
    });

    return dp[m][n];
};