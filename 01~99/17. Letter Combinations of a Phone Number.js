/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const letters = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    const results = [];

    const combine = (k, str) => {
        if (k === digits.length) return str ? results.push(str) : null;

        const number = +digits[k];
        for (var i = 0; i < letters[number].length; i++) {
            combine(k + 1, str + letters[number][i]);
        }
    };

    combine(0, '');

    return results;
};