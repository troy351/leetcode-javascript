/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    var stack = [];
    var result = 0;
    // match all matchable parentheses, only unmatchable parentheses will be left in stack
    for (var i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else {
            if (stack.length !== 0 && s[stack[stack.length - 1]] === '(') {
                stack.pop();
            } else {
                stack.push(i);
            }
        }
    }

    // longest substring must between to unmatchable parentheses
    if (stack.length === 0) {
        result = s.length;
    } else {
        var right = s.length, left = 0;
        while (stack.length > 0) {
            left = stack.pop();
            result = Math.max(result, right - left - 1);
            right = left;
        }
        result = Math.max(result, right);
    }

    return result;
};