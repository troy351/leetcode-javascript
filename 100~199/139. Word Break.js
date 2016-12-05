/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    const f = new Array(s.length + 1).fill(false);
    f[0] = true;
    //Second DP
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (f[j] && wordDict.has(s.substring(j, i))) {
                f[i] = true;
                break;
            }
        }
    }

    return f[s.length];
};