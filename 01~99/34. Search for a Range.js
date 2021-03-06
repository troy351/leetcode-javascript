/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let low = 0, high = nums.length - 1;
    // find the start of range
    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    if (nums[low] !== target) return [-1, -1];
    const start = low;

    // no need to set low to 0, for the end of range must grater than low
    high = nums.length - 1;
    // find the end of range
    while (low < high) {
        const mid = Math.floor((low + high) / 2) + 1;
        if (nums[mid] > target) {
            high = mid - 1
        } else {
            low = mid;
        }
    }

    return [start, high];
};