/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isConvex = function (points) {
    const det = (x1, y1, x2, y2) => {
        return x1 * y2 - x2 * y1;
    };

    const cross = (p0, p1, p2) => {
        return det(p1[0] - p0[0], p1[1] - p0[1], p1[0] - p2[0], p1[1] - p2[1]);
    };


    let p, q, r;

    r = points[0];
    p = points[1];

    let d = cross(points[points.length - 1], points[0], points[1]);
    for (let i = 2; i < points.length; i++) {
        q = points[i];
        if (cross(r, p, q) * d < 0) return false;
        r = p;
        p = q;
    }

    return cross(r, p, points[0]) * d >= 0;
};