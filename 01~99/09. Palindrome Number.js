/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    var s = x.toString();
    for (var i = 0; i < s.length / 2; i++) {
        if (s[i] !== s[s.length - i - 1]) return false;
    }
    return true;
};