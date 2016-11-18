/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    const height = [].concat(0, heights, 0);
    let result = 0, s = [0];

    for (let i = 1; i < height.length; i++) {
        while (height[i] < height[s[s.length - 1]]) {
            // if the current entry is out of order
            const index = s.pop();
            // note how the width is calculated, use the previous index entry
            result = Math.max(result, height[index] * (i - s[s.length - 1] - 1));
        }
        s.push(i);
    }

    return result;
};