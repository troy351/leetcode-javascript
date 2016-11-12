/**
 * Explanation just the same as question 11
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let left = 0, right = height.length - 1;
    let maxLeft = 0, maxRight = 0;
    let result = 0;
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