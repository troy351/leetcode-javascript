/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    if (s === '') return 0;

    const memo = new Array(s.length + 1).fill(0);
    memo[s.length] = 1;
    memo[s.length - 1] = s[s.length - 1] === '0' ? 0 : 1;

    for (let i = s.length - 2; i >= 0; i--)
        if (s[i] !== '0') memo[i] = (+s.substr(i, 2) <= 26) ? memo[i + 1] + memo[i + 2] : memo[i + 1];

    return memo[0];
};