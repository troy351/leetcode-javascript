/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function (maxChoosableInteger, desiredTotal) {
    const canWin = (total, state, map)=> {
        if (map.has(state)) return map.get(state);
        for (let i = 0; i < maxChoosableInteger; i++) {
            if ((1 << i & state) === 0) {
                if (total <= i + 1 || !canWin(total - (i + 1), 1 << i | state, map)) {
                    map.set(state, true);
                    return true;
                }
            }
        }
        map.set(state, false);
        return false;
    };

    if (maxChoosableInteger >= desiredTotal) return true;
    if (maxChoosableInteger * (maxChoosableInteger + 1) / 2 < desiredTotal) return false;

    return canWin(desiredTotal, 0, new Map());
};