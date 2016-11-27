/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
    const dp = new Array(t.length + 1).fill(0);
    dp[0] = 1;

    for (let i = 1; i <= s.length; i++) {
        for (let j = t.length; j > 0; j--) {
            dp[j] += t[j - 1] === s[i - 1] ? dp[j - 1] : 0;
        }
    }

    return dp[t.length];
};
