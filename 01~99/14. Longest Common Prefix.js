/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let str = strs[0];
    for (let i = 1; i < strs.length; i++) {
        let j = 0, length = Math.min(str.length, strs[i].length);
        while (str[j] === strs[i][j] && j < length) {
            j++;
        }
        str = str.substr(0, j);
        if (str === '' || str === undefined) return '';
    }
    return str || '';
};