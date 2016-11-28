/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    const sum = [triangle[0][0]];
    for (let i = 1; i < triangle.length; i++) {
        sum[i] = sum[i - 1];
        for (let j = triangle[i].length - 1; j > 0; j--) {
            sum[j] = Math.min(sum[j], sum[j - 1]) + triangle[i][j];
        }
        sum[0] += triangle[i][0];
    }

    return Math.min(...sum);
};