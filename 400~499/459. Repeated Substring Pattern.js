/**
 * @param {string} str
 * @return {boolean}
 */
var repeatedSubstringPattern = function (str) {
    if (str.length <= 1) return false;

    const check = (len, count)=> {
        return str === str.substr(0, len).repeat(count);
    };

    const length = Math.sqrt(str.length) >> 0;
    if (check(1, str.length)) return true;
    for (let i = 2; i <= length; i++) {
        if (str.length % i === 0) {
            if (check(i, str.length / i)) return true;
            if (check(str.length / i, i)) return true;
        }
    }

    return false;
};