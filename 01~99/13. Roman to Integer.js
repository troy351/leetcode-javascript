/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const roman = [];
    roman['I'] = 1;
    roman['V'] = 5;
    roman['X'] = 10;
    roman['L'] = 50;
    roman['C'] = 100;
    roman['D'] = 500;
    roman['M'] = 1000;

    let result = roman[s[s.length - 1]];

    for (let i = s.length - 2; i >= 0; i--) {
        result += roman[s[i + 1]] > roman[s[i]] ? -roman[s[i]] : roman[s[i]];
    }

    return result;
};