/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    var roman = [];
    roman[1] = 'I';
    roman[5] = 'V';
    roman[10] = 'X';
    roman[50] = 'L';
    roman[100] = 'C';
    roman[500] = 'D';
    roman[1000] = 'M';

    var base = 1, result = '';
    while (num > 0) {
        var rnum = '';
        var unit = num % 10;
        num = Math.floor(num / 10);
        if (unit !== 0) {
            if (unit < 4) {
                // 1, 2, 3
                while (unit-- > 0) rnum += roman[base];
            } else if (unit < 5) {
                // 4
                rnum += roman[base] + roman[base * 5];
            } else if (unit < 9) {
                // 5, 6, 7, 8
                rnum = roman[base * 5];
                while (unit-- > 5) rnum += roman[base];
            } else if (unit < 10) {
                // 9
                rnum += roman[base] + roman[base * 10];
            }
            result = rnum + result;
        }
        base *= 10;
    }

    return result;
};