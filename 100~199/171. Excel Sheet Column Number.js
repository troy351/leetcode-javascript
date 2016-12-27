/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
    return Array.from(s).reduce((sum, char) => sum * 26 + char.charCodeAt(0) - 64, 0);
};