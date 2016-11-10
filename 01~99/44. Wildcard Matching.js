/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    let i = 0, j = 0, asterisk = -1, match = 0;
    while (i < s.length) {
        if (j < p.length && p[j] === '*') {
            match = i;
            asterisk = j++;
        }
        else if (j < p.length && (s[i] === p[j] || p[j] === '?')) {
            i++;
            j++;
        }
        else if (asterisk >= 0) {
            i = ++match;
            j = asterisk + 1;
        }
        else return false;
    }

    while (j < p.length && p[j] === '*') j++;

    return j === p.length;
};