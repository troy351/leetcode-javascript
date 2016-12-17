/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {
    // zero numerator
    if (numerator == 0) return "0";

    let res = '';
    // determine the sign
    if (numerator < 0 ^ denominator < 0) res += '-';

    // remove sign of operands
    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);

    // append integral part
    res += Math.floor(numerator / denominator);

    // in case no fractional part
    if (numerator % denominator === 0) return res;

    res += '.';

    const map = new Map();
    // simulate the division process
    for (let r = numerator % denominator; r; r %= denominator) {

        // meet a known remainder
        // so we reach the end of the repeating part
        if (map.has(r)) {
            const pos = map.get(r);
            res = res.substring(0, pos) + '(' + res.substring(pos);
            res += ')';
            break;
        }

        // the remainder is first seen
        // remember the current position for it
        map.set(r, res.length);

        r *= 10;

        // append the quotient digit
        res += Math.floor(r / denominator);
    }

    return res;
};

console.log(fractionToDecimal(1,
    214748364))