/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
    let diff = nums.reduce((a, b) => a ^ b);
    diff &= -diff;

    const result = new Array(2).fill(0);
    nums.forEach(num => result[+!(num & diff)] ^= num);

    return result;
};