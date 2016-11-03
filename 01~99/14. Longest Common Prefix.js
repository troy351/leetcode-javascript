/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    var str = strs[0];
    for (var i = 1; i < strs.length; i++) {
        var j = 0, length = Math.min(str.length, strs[i].length);
        while (str[j] === strs[i][j] && j < length) {
            j++;
        }
        str = str.substr(0, j);
        if (str === '' || str === undefined) return '';
    }
    return str ? str : '';
};