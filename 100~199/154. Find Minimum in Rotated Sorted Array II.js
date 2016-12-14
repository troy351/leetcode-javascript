/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let low = 0, high = nums.length - 1;

    while (low < high) {
        const mid = (high + low) >> 1;

        if (nums[mid] > nums[high]) {
            low = mid + 1;
        } else if (nums[mid] < nums[high]) {
            high = mid;
        } else {
            // when num[mid] and num[hi] are same
            high--;
        }
    }

    return nums[low];
};