/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    var result = [], i;

    // left part
    result[0] = 1;
    for (i = 1; i < nums.length; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }

    // right part
    var right = 1;
    for (i = nums.length - 1; i >= 0; i--) {
        result[i] *= right;
        right *= nums[i];
    }

    return result;
};