/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function (houses, heaters) {
    heaters.sort((a, b) => a - b);
    houses.sort((a, b) => a - b);
    let result = 0, i = 0;

    houses.forEach(house => {
        while (i < heaters.length - 1 && heaters[i] + heaters[i + 1] <= house * 2) {
            i++;
        }
        result = Math.max(result, Math.abs(heaters[i] - house)) ;
    });

    return result;
};