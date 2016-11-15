/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let len = Math.max(a.length, b.length);
    while (a.length < len) a = '0' + a;
    while (b.length < len) b = '0' + b;

    let result = '', carry = 0;
    while (len-- > 0) {
        const sum = +a[len] + (+b[len]) + carry;
        switch (sum) {
            case 0:
                result = '0' + result;
                carry = 0;
                break;
            case 1:
                result = '1' + result;
                carry = 0;
                break;
            case 2:
                result = '0' + result;
                carry = 1;
                break;
            case 3:
                result = '1' + result;
                carry = 1;
                break;
        }
    }

    return carry === 1 ? '1' + result : result;
};