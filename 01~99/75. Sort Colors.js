/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let two = nums.length - 1, zero = 0;
    for (let i = 0; i <= two; i++) {
        while (nums[i] === 2 && i < two) {
            nums[i] = nums[two];
            nums[two--] = 2;
        }
        while (nums[i] === 0 && i > zero) {
            nums[i] = nums[zero];
            nums[zero++] = 0;
        }
    }
};