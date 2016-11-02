/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    var letters = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    var results = [];

    combine(0, '');

    return results;

    function combine(k, str) {
        if (k === digits.length) return str !== '' ? results.push(str) : null;

        var number = parseInt(digits[k]);
        var length = letters[number].length;
        for (var i = 0; i < length; i++) {
            combine(k + 1, str + letters[number][i]);
        }
    }
};