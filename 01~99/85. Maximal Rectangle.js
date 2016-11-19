/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
    const readLine = (line, arr)=> {
        for (let i = 0; i < matrix[0].length; i++) {
            if (matrix[line][i] === '1') arr[i]++;
            else arr[i] = 0;
        }
    };

    // code from question 84
    const findMaxRect = (arr)=> {
        const height = [].concat(0, arr, 0);
        let max = 0, s = [0];

        for (let i = 1; i < height.length; i++) {
            while (height[i] < height[s[s.length - 1]]) {
                // if the current entry is out of order
                const index = s.pop();
                // note how the width is calculated, use the previous index entry
                max = Math.max(max, height[index] * (i - s[s.length - 1] - 1));
            }
            s.push(i);
        }

        return max;
    };

    if (matrix.length === 0 || matrix[0].length === 0) return 0;
    const height = matrix[0].map(v=>+v);
    let result = findMaxRect(height);

    for (let i = 1; i < matrix.length; i++) {
        readLine(i, height);
        result = Math.max(result, findMaxRect(height));
    }

    return result;
};