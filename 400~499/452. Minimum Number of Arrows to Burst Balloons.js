/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
    if (points.length === 0) return 0;

    points.sort((a, b) =>a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);

    let start = points[0][0], end = points[0][1], result = 1;
    for (let i = 1; i < points.length; i++) {
        if (points[i][0] <= end) {
            start = Math.max(points[i][0], start);
            end = Math.min(points[i][1], end);
        } else {
            result++;
            start = points[i][0];
            end = points[i][1];
        }
    }

    return result;
};