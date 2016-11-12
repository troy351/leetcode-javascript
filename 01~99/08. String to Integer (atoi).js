/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    str = str.trim();
    let i = str[0] === '-' || str[0] === '+' ? 1 : 0;
    const sign = str[0] === '-' ? -1 : 1;
    let result = 0;
    const MAX_VALUE = Math.pow(2, 31) - 1;

    while (true) {
        const ascii = str.charCodeAt(i);
        if (isNaN(ascii)) break;
        if (ascii < 58 && ascii >= 48) {
            result = result * 10 + ascii - 48;
            i++;
            // if out of 32-bit integer range, return the maximum or minimum number
            if (sign * result > MAX_VALUE) return MAX_VALUE;
            else if (sign * result < -(MAX_VALUE + 1)) return -(MAX_VALUE + 1);
        } else break;
    }

    return sign * result;
};