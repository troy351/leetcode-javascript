/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
    let l = 0, r = nums.length - 1;

    while (l <= r) {
        const m = (r + l) >> 1;
        //return m in Search in Rotated array I
        if (nums[m] == target) return true;

        if (nums[l] < nums[m]) {
            //left half is sorted
            if (nums[l] <= target && target < nums[m]) r = m - 1;
            else l = m + 1;
        } else if (nums[l] > nums[m]) {
            //right half is sorted
            if (nums[m] < target && target <= nums[r]) l = m + 1;
            else r = m - 1;
        } else l++;
    }

    return false;
};