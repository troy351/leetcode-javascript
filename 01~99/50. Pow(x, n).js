/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    let nn = Math.abs(n);
    let result = 1;
    while (nn > 0) {
        if (nn % 2 === 1) result *= x;
        x *= x;
        nn >>>= 1;
    }

    return n < 0 ? 1 / result : result;
};