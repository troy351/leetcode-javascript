/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let low = 0, high = nums.length - 1;
    // binary search to find rotate center
    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (nums[mid] > nums[high]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    // low === high === rotateCenter
    const shift = low;

    // binary search for target
    low = 0;
    high = nums.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        var realMid = (mid + shift) % nums.length;
        if (nums[realMid] === target) {
            return realMid;
        } else if (nums[realMid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
};