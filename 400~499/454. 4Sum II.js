/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function (A, B, C, D) {
    const combine = (m, n)=> {
        const res = [];
        for (let i = 0; i < m.length; i++) {
            for (let j = 0; j < n.length; j++) {
                res.push(m[i] + n[j]);
            }
        }
        return res.sort((a, b)=>a - b);
    };

    const ab = combine(A, B);
    const cd = combine(C, D);
    let l = 0, r = cd.length - 1, count = 0;
    while (l < ab.length && r >= 0) {
        if (ab[l] + cd[r] === 0) {
            l++;
            r--;
            let x = 1, y = 1;
            while (ab[l] === ab[l - 1]) {
                x++;
                l++;
            }
            while (cd[r] === cd[r + 1]) {
                y++;
                r--;
            }

            if (x * y === 0) {
                count += x + y;
            } else {
                count += x * y;
            }
        } else {
            if (ab[l] + cd[r] < 0) {
                l++;
            } else {
                r--;
            }
        }
    }

    return count;
};