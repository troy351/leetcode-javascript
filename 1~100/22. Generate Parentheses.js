/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    var result = [];
    addParentheses('', n, 0);
    return result;

    function addParentheses(str, n, stack) {
        if (n === 0) {
            while (stack-- > 0) str += ')';
            return result.push(str);
        }
        if (stack === 0) return addParentheses(str + '(', n - 1, stack + 1);
        addParentheses(str + '(', n - 1, stack + 1);
        addParentheses(str + ')', n, stack - 1);
    }
};