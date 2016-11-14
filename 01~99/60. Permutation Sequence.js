/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
    const factorial = new Array(9).fill(1);
    factorial.forEach((v, i)=>factorial[i] = i > 0 ? i * factorial[i - 1] : 1);
    const used = new Array(10).fill(0).map((v, i)=>i);

    let result = '';
    for (let i = n - 1; i >= 0; i--) {
        if (k <= factorial[i]) {
            result += used[1];
            used.splice(1, 1);
        } else {
            const step = Math.ceil(k / factorial[i]);
            result += used[step];
            used.splice(step, 1);
            k -= factorial[i] * (step - 1);
        }
    }

    return result;
};