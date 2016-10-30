/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var map = new Map();
    var results = [];
    nums.filter(function (element, index, array) {
        map.set(element, index);
    });

    nums.every(function (element, index, array) {
        if (map.get(target - element) === undefined || map.get(target - element) === index) {
            // not found
            return true;
        } else {
            // found
            results.push(index);
            results.push(map.get(target - element));
            return false;
        }
    });

    return results.sort();
};