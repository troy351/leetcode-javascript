/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let i = 0;
    const stack = [];

    const isMatch = (left, right) => {
        return left === '[' && right === ']' || left === '{' && right === '}' || left === '(' && right === ')';
    };

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
};