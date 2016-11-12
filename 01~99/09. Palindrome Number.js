/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    const s = x.toString();

    for (let i = 0; i < s.length / 2; i++) {
        if (s[i] !== s[s.length - i - 1]) return false;
    }

    return true;
};