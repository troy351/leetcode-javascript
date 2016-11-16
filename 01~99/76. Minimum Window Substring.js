/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    const asc = new Array(128).fill(0);
    t.split('').forEach(v=>asc[v.charCodeAt(0)]++);

    let counter = t.length, start = 0, minStart = 0, distance = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < s.length; i++) {
        const code = s.charCodeAt(i);
        if (asc[code] > 0) {
            counter--;
        }

        asc[code]--;

        while (counter === 0) {
            if (i - start + 1 < distance) {
                distance = i - start + 1;
                minStart = start;
            }

            const code = s.charCodeAt(start);
            asc[code]++;

            if (asc[code] > 0) {
                counter++;
            }

            start++;
        }
    }

    return distance === Number.MAX_SAFE_INTEGER ? '' : s.substr(minStart, distance);
};