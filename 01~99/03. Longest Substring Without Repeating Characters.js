/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const index = [];
    let start = 0, max = 0;

    for (let i = 0; i < s.length; i++) {
        index[s[i]] = index[s[i]] || 0;
        start = Math.max(index[s[i]], start);
        max = Math.max(max, i - start + 1);
        index[s[i]] = i + 1;
    }

    return max;
};