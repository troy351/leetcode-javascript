/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function (s1, s2) {
    const isnScramble = (s1, s2) => {
        if (s1 === s2) return true;

        if (s1.split('').sort().toString() !== s2.split('').sort().toString()) return false;

        for (let i = 1; i < s1.length; i++)
            if (isnScramble(s1.substr(0, i), s2.substr(0, i)) && isnScramble(s1.substr(i), s2.substr(i)) ||
                isnScramble(s1.substr(0, i), s2.substr(s2.length - i)) && isnScramble(s1.substr(i), s2.substr(0, s2.length - i))) return true;
        return false;
    };

    return isnScramble(s1, s2);
};