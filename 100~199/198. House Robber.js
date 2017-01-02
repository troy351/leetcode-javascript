/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let a = 0, b = 0;

    nums.forEach((value, index) => {
        if (index % 2 === 0) {
            a = Math.max(a + value, b);
        } else {
            b = Math.max(a, b + value);
        }
    });

    return Math.max(a, b);
};