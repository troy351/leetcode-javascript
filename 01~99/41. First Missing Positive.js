/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    let i = 0;
    while (i < nums.length) {
        if (nums[i] === i + 1 || nums[i] <= 0 || nums[i] > nums.length || nums[nums[i] - 1] === nums[i]) {
            i++;
        } else {
            // number in position i does not in its own place
            const temp = nums[nums[i] - 1];
            nums[nums[i] - 1] = nums[i];
            nums[i] = temp;
        }
    }

    i = 0;
    while (i < nums.length && nums[i] === i + 1) {
        i++;
    }

    return i + 1;
};