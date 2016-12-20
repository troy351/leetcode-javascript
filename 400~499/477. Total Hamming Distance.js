/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function (nums) {
    let total = 0;
    for (let i = 0; i < 32; i++) {
        const bitCount = nums.reduce((acc, num) => acc + (num >> i & 1), 0);
        total += bitCount * (nums.length - bitCount);
    }
    return total;
};
