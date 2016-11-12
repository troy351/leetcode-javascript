/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let result = '';
    const s = Math.abs(x).toString();

    // reverse string
    for (var i = s.length - 1; i >= 0; i--) {
        result += s[i];
    }

    result = parseInt(result);
    // result must be a 32-bit integer, or return 0
    result = result > Math.pow(2, 31) - 1 ? 0 : result;

    return Math.sign(x) * result;
};