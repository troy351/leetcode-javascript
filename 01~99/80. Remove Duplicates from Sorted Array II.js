/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let cur = 0;
    for (let i = 0; i < nums.length; i++) {
        if (cur < 2 || nums[i] > nums[cur - 2]) nums[cur++] = nums[i];
    }
    return cur;
};