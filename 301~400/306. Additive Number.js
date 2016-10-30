/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function (num) {
    var len = num.length;
    var s1 = 1, s2 = 0;

    while (s1 < len / 2) {
        if (s1 + s2 + Math.max(s1, s2) > len) {
            if (Math.max(s1, s2) === s2) {
                s1++;
                s2 = 0;
            }
        }

        s2++;

        var str1 = num.substr(0, s1);
        var str2 = num.substr(s1, s2);

        // if number starts with '0', and not '0' itself, try next case
        if ((str1[0] === '0' && s1 !== 1) || (str2[0] === '0' && s2 !== 1)) {
            continue;
        }

        var curStr = str1 + str2;

        var num1 = parseInt(str1);
        var num2 = parseInt(str2);

        // according to the question, must at least add a number before comparison
        do {
            var sum = num1 + num2;
            curStr += sum;
            num1 = num2;
            num2 = sum;
        } while (curStr.length < num.length);

        if (curStr === num) {
            return true;
        }
    }

    return false;
};