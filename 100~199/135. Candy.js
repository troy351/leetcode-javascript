/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
    const candy = new Array(ratings.length).fill(1);

    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candy[i] = candy[i - 1] + 1;
        }
    }

    for (let i = ratings.length - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1] && candy[i] < candy[i + 1] + 1) {
            candy[i] = candy[i + 1] + 1;
        }
    }

    return candy.reduce((a, b) => a + b);
};