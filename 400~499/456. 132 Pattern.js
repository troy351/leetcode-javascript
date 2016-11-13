/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
    let min = Number.MAX_VALUE;
    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i - 1] < min) min = nums[i - 1];
        if (nums[i] <= min) continue;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[i] && nums[j] > min) return true;
        }
    }
    return false;
};