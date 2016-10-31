/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    // add `#` between every character to make the string length always odd
    // add `^` & `$` at the top and bottom of the string to make the comparison stop when reaching the edge of the string
    var T = '^#' + s.split('').join('#') + '#$';
    var center = 0;
    var radius = [];

    radius[0] = 0;

    /**
     * get the length of palindrome centered at `index`, start length from `start`
     * @param index  the center of the palindrome
     * @param init  the initial length of the palindrome(half length)
     */
    function findPalindrome(index, init) {
        init = init || 0;
        radius[index] = init;
        while (T[index + radius[index] + 1] === T[index - radius[index] - 1]) {
            radius[index]++;
        }
    }

    for (var i = 1; i < T.length; i++) {
        var i_ = 2 * center - i;
        var diff = radius[center] + center - i;
        if (diff >= 0) {
            // within the range of palindrome centered at `center`
            if (diff > radius[i_]) {
                // can use the mirror position of `i`
                radius[i] = radius[i_];
            } else {
                // can't use the mirror position of `i`, find palindrome with initial length `diff`
                findPalindrome(i, diff);
                center = i;
            }
        } else {
            // out of the range of palindrome centered at `center`, find palindrome manually
            findPalindrome(i);
            center = i;
        }
    }

    // find the largest number's position in `radius` array
    var longestPosition = 0;
    radius.forEach(function (value, index) {
        longestPosition = value > radius[longestPosition] ? index : longestPosition;
    });

    // return the substring, center at longestPosition, range radius[longestPosition] at each side, delete the assistant character `#^$`
    return T.substring(longestPosition - radius[longestPosition], longestPosition + radius[longestPosition]).replace(/[#^$]/g, '');
};