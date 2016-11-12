/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    const hold = haystack.length - needle.length;

    for (let i = 0; i <= hold; i++) {
        const end = i + needle.length;
        let j;
        for (j = i; j < end; j++) {
            if (haystack[j] !== needle[j - i]) break;
        }

        if (j === i + needle.length) return i;
    }

    return -1;
};