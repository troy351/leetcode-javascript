/**
 * Definition for a point.
 * function Point(x, y) {
 *     this.x = x;
 *     this.y = y;
 * }
 */
/**
 * @param {Point[]} points
 * @return {number}
 */
var maxPoints = function (points) {
    if (points === null) return 0;
    if (points.length <= 2) return points.length;

    const generateGCD = (a, b) => {
        return b === 0 ? a : generateGCD(b, a % b);
    };

    const map = new Map();
    let result = 0;

    for (let i = 0; i < points.length; i++) {
        map.clear();
        let overlap = 0, max = 0;
        for (let j = i + 1; j < points.length; j++) {
            let x = points[j].x - points[i].x;
            let y = points[j].y - points[i].y;

            if (x === 0 && y === 0) {
                overlap++;
                continue;
            }

            const gcd = generateGCD(x, y);
            x /= gcd;
            y /= gcd;

            if (map.has(x)) {
                const subMap = map.get(x);
                if (subMap.has(y)) {
                    subMap.set(y, subMap.get(y) + 1);
                } else {
                    subMap.set(y, 1);
                }
            } else {
                const m = new Map();
                m.set(y, 1);
                map.set(x, m);
            }
            max = Math.max(max, map.get(x).get(y));
        }
        result = Math.max(result, max + overlap + 1);
    }

    return result;
};