/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
    if (s3.length !== s1.length + s2.length) return false;

    const dp = [];

    for (let i = 0; i <= s2.length; i++) dp[i] = s2.substr(0, i) === s3.substr(0, i);
    for (let i = 1; i <= s1.length; i++) {
        dp[0] = s1.substr(0, i) === s3.substr(0, i);
        for (let j = 1; j <= s2.length; j++)
            dp[j] = (dp[j] && s3[i + j - 1] === s1[i - 1]) || (dp[j - 1] && s3[i + j - 1] === s2[j - 1]);
    }

    return dp[s2.length];
};