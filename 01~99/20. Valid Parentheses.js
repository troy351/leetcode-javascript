/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    var i = 0;
    var stack = [];
    while (i < s.length) {
        var c = s[i];
        if ('({['.indexOf(c) !== -1) {
            stack.push(c);
        } else {
            if (!isMatch(stack.pop(), c)) break;
        }
        i++;
    }

    return i === s.length && stack.length === 0;

    function isMatch(left, right) {
        return left === '[' && right === ']' || left === '{' && right === '}' || left === '(' && right === ')';
    }
};