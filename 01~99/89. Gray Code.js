/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
    const result = [], count = Math.pow(2, n);

    for (let i = 0; i < count; i++) {
        result.push(i ^ (i >> 1));
    }

    return result;
};