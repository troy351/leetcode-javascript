/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    var hold = haystack.length - needle.length;
    for (var i = 0; i <= hold; i++) {
        var end = i + needle.length;
        for (var j = i; j < end; j++) {
            if (haystack[j] !== needle[j - i]) break;
        }

        if (j === i + needle.length) return i;
    }
    return -1;
};