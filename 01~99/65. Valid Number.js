/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
    return !!s.trim().match(/^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i);
};
