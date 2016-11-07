/**
 * Explanation just the same as question 11
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    var left = 0, right = height.length - 1;
    var maxLeft = 0, maxRight = 0;
    var result = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] > maxLeft) {
                maxLeft = height[left];
            } else {
                result += maxLeft - height[left];
            }
            left++;
        } else {
            if (height[right] > maxRight) {
                maxRight = height[right];
            } else {
                result += maxRight - height[right];
            }
            right--;
        }
    }

    return result;
};