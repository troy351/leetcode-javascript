/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort(function (a, b) {
        return a - b;
    });
    var result = [];
    var i = 0;

    while (i < nums.length - 2) {
        var j = i + 1;
        var k = nums.length - 1;
        while (j < k) {
            var sum = nums[i] + nums[j] + nums[k];
            if (sum === 0) result.push([nums[i], nums[j], nums[k]]);
            if (sum <= 0) while (nums[j] == nums[++j] && j < k);
            if (sum >= 0) while (nums[k--] == nums[k] && j < k);
        }
        while (nums[i] == nums[++i] && i < nums.length - 2);
    }

    return result;
};