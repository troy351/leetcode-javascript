/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const result = [];
    const map = new Map();

    strs.forEach((value)=> {
        const key = value.split('').sort().join('');
        if (map.has(key)) {
            map.get(key).push(value);
        } else {
            map.set(key, [value]);
        }
    });

    map.forEach(v=>result.push(v));
    map.clear();

    return result;
};