/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    var max = 0;
    var low = 0, high = height.length - 1;
    while (low < high) {
        max = Math.max(max, (high - low) * Math.min(height[low], height[high]));
        if (height[low] < height[high]) low++;
        else high--;
    }
    return max;
};