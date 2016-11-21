/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function (maxChoosableInteger, desiredTotal) {
    let set = [];

    const canWin = (set1, total)=> {
        if (set[total].has(set1)) return set[total].get(set1);

        for (let i = 20; i >= 1; i--) {
            const p = (1 << i);
            if ((p & set1) === p) {
                const set1next = (set1 ^ p);
                const totalNext = total - i;
                if (totalNext <= 0) return true;
                let x;
                if (set[totalNext].has(set1next)) x = set[totalNext].get(set1next);
                else x = canWin(set1next, totalNext);
                if (!x) {
                    set[total].set(set1, true);
                    return true;
                }
            }
        }
        set[total].set(set1, false);
        return false;
    };

    if (maxChoosableInteger >= desiredTotal) return true;
    if (maxChoosableInteger + 1 === desiredTotal) return false;
    if (maxChoosableInteger * (maxChoosableInteger + 1) / 2 < desiredTotal) return false;

    set = new Array(301).fill(0).map(()=>new Map());
    return canWin((1 << maxChoosableInteger + 1) - 1, desiredTotal);
};