/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length === 0) return 0;

    let count = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) continue;
        nums[count] = nums[i];
        count++;
    }

    return count;
};