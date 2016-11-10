/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    const result = new Array(num1.length + num2.length).fill(0);
    for (let i = 0; i < num1.length; i++) {
        for (let j = 0; j < num2.length; j++) {
            const x = num1.length - 1 - i, y = num2.length - 1 - j;
            const p = i + j;
            result[p] += (+num1[x]) * (+num2[y]);
            result[p + 1] += (result[p] / 10) >> 0;
            result[p] = result[p] % 10;
        }
    }
    // remove head 0
    let head = num1.length + num2.length - 1;
    while (result[head] === 0 && head > 0) head--;
    result.splice(head + 1);

    return result.reverse().join('');
};