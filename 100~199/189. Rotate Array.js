/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    let right = nums.length, left = 0;
    for (; k % right; right -= k, left += k) {
        // Swap the last k elements with the first k elements.
        // The last k elements will be in the correct positions
        // but we need to rotate the remaining (n - k) elements
        // to the right by k steps.
        k %= right;
        for (let i = 0; i < k; i++) {
            [nums[left + i], nums[right - k + i + left]] = [nums[right - k + i + left], nums[i + left]];
        }
    }
};