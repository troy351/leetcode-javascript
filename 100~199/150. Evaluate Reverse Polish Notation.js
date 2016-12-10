/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const stack = [];

    for (let i = 0; i < tokens.length; i++) {
        switch (tokens[i]) {
            case '+':
                stack.push(stack.pop() + stack.pop());
                break;
            case '-':
                stack.push(-stack.pop() + stack.pop());
                break;
            case '*':
                stack.push(stack.pop() * stack.pop());
                break;
            case '/':
                stack.push(1 / stack.pop() * stack.pop() >> 0);
                break;
            default:
                stack.push(+tokens[i]);
        }
    }

    return stack.pop();
};