/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    var low = 0, high = nums.length - 1;
    while (low < high) {
        var mid = Math.floor((low + high) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return nums[low] < target ? low + 1 : low;
};