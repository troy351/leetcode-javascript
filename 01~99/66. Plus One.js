/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    const result = digits.slice();
    result[result.length - 1]++;

    let carry = 0, i = result.length - 1;
    do {
        result[i] += carry;
        carry = result[i] / 10 >> 0;
        result[i] %= 10;
        i--;
    } while (i >= 0 && carry > 0);

    if (carry > 0) result.splice(0, 0, carry);

    return result;
};

console.log(plusOne([9,9]));