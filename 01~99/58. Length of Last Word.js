/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let length = 0;
    s = s.trim();
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ' ') break;
        length++;
    }

    return length;
};