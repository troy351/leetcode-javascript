/**
 * @param {number[][]} points
 * @return {number}
 */

var numberOfBoomerangs = function (points) {
    var map = new Map();
    var result = 0;
    for (var i = 0; i < points.length; i++) {
        for (var j = 0; j < points.length; j++) {
            if (i === j) continue;
            var x = points[i][0] - points[j][0], y = points[i][1] - points[j][1];
            var key = x * x + y * y;
            if (map.has(key)) map.set(key, map.get(key) + 1);
            else map.set(key, 1);
        }

        map.forEach(function (value) {
            result += value * (value - 1);
        });

        map.clear();
    }

    return result;
};