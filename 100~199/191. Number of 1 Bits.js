/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    return Array.from(n.toString(2)).reduce((a, b) => a + (+b), 0);
};