/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
    return n === 0 ? '' : convertToTitle(Math.floor(--n / 26)) + String.fromCharCode(65 + n % 26);
};