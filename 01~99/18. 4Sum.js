/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    nums.sort(function (a, b) {
        return a - b;
    });
    var result = [];

    var i = 0;
    while (i <= nums.length - 4) {
        threeSum(i, nums, target - nums[i]);
        while (nums[i] === nums[++i] && i <= nums.length - 4);
    }

    return result;

    // used code from question 15, made some small changes
    function threeSum(start, nums, target) {
        var i = start + 1;
        while (i < nums.length - 2) {
            var j = i + 1;
            var k = nums.length - 1;
            while (j < k) {
                var sum = nums[i] + nums[j] + nums[k];
                if (sum === target) {
                    result.push([nums[start], nums[i], nums[j], nums[k]]);
                }
                if (sum <= target) while (nums[j] === nums[++j] && j < k);
                if (sum >= target) while (nums[k--] === nums[k] && j < k);
            }
            while (nums[i] === nums[++i] && i < nums.length - 2);
        }
    }
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0))