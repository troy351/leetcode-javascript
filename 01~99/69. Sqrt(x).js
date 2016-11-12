/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let a = 1;
    // not accurate enough
    while (Math.abs(x - a * a) > 0.1) {
        // Newton's method
        a = (a + x / a) / 2;
    }

    return a >> 0;
};