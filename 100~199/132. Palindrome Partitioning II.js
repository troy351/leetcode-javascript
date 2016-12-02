/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
    // number of dps for the first k characters
    const dp = new Array(s.length + 1).fill(0).map((v, i)=>i - 1);

    for (let i = 0; i < s.length; i++) {
        // odd length palindrome
        for (let j = 0; i - j >= 0 && i + j < s.length && s[i - j] === s[i + j]; j++)
            dp[i + j + 1] = Math.min(dp[i + j + 1], dp[i - j] + 1);

        // even length palindrome
        for (let j = 1; i - j + 1 >= 0 && i + j < s.length && s[i - j + 1] === s[i + j]; j++)
            dp[i + j + 1] = Math.min(dp[i + j + 1], dp[i - j + 1] + 1);
    }

    return dp[s.length];
};