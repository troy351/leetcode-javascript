/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
    if (nums.length <= 1) return 0;

    nums.sort((a, b)=>a - b);
    let left = nums[Math.floor(nums.length / 2) - 1], right = nums[Math.floor(nums.length / 2)];
    let leftCount = 0, rightCount = 0;
    nums.forEach(v=> {
        leftCount += Math.abs(left - v);
        rightCount += Math.abs(right - v);
    });

    return Math.min(leftCount, rightCount);
};