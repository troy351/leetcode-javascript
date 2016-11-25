/**
 * 1. Start from its last element, traverse backward to find the first one with index i that satisfy num[i-1] < num[i].
 * 2. Do the same as above, find j between i and length-1 that satisfy nums[j] > nums[i-1], for nums[i .. length-1] is in descending order, so just find first one then break.
 * 3. swap nums[i-1] and nums[j]
 * 4. Reverse nums[i .. length-1]
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    let i;
    for (i = nums.length - 1; i > 0; i--) {
        if (nums[i] > nums[i - 1]) {
            let j;
            for (j = nums.length - 1; j >= i; j--) {
                if (nums[j] > nums[i - 1]) break;
            }
            [nums[i - 1], nums[j]] = [nums[j], nums[i - 1]];
            break;
        }
    }

    const mid = (nums.length + i - 1) / 2;
    for (; i < mid; i++) {
        [nums[i], nums[mid * 2 - i]] = [nums[mid * 2 - i], nums[i]];
    }
};