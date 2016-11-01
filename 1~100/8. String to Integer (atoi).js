/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    str = str.trim();
    var i = str[0] === '-' || str[0] === '+' ? 1 : 0;
    var sign = str[0] === '-' ? -1 : 1;
    var result = 0;
    var maxNumber = Math.pow(2, 31) - 1;

    while (true) {
        var ascii = str.charCodeAt(i);
        if (isNaN(ascii)) break;
        if (ascii < 58 && ascii >= 48) {
            result = result * 10 + ascii - 48;
            i++;
            // if out of 32-bit integer range, return the maximum or minimum number
            if (sign * result > maxNumber) return maxNumber;
            else if (sign * result < -(maxNumber + 1)) return -(maxNumber + 1);
        } else break;
    }

    return sign * result;
};