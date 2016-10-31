/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    // ensure that nums1 was shorter than nums2
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    var imin = 0, imax = nums1.length, halfLen = Math.floor((nums1.length + nums2.length + 1) / 2);
    while (imin <= imax) {
        var i = Math.floor((imin + imax) / 2);
        var j = halfLen - i;
        if (i < nums1.length && nums2[j - 1] > nums1[i]) {
            imin = i + 1;
        } else if (i > 0 && nums1[i - 1] > nums2[j]) {
            imax = i - 1;
        } else {
            var maxLeft = 0, minRight = 0;
            if (i === 0) {
                maxLeft = nums2[j - 1];
            } else if (j === 0) {
                maxLeft = nums1[i - 1];
            } else {
                maxLeft = Math.max(nums1[i - 1], nums2[j - 1]);
            }

            if ((nums1.length + nums2.length) % 2) {
                return maxLeft;
            }

            if (i === nums1.length) {
                minRight = nums2[j];
            } else if (j === nums2.length) {
                minRight = nums1[i];
            } else {
                minRight = Math.min(nums1[i], nums2[j]);
            }

            return (maxLeft + minRight) / 2;
        }
    }
};

console.log(findMedianSortedArrays([2,3],[]));