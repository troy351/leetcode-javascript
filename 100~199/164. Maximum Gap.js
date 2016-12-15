/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
    if (nums === null || nums.length < 2) return 0;

    // get the max and min value of the array
    const min = Math.min(...nums), max = Math.max(...nums);

    // the minimum possible gap, ceiling of the integer division
    const gap = Math.ceil((max - min) / (nums.length - 1));
    const bucketsMIN = new Array(nums.length - 1).fill(Number.MAX_SAFE_INTEGER);
    const bucketsMAX = new Array(nums.length - 1).fill(Number.MIN_SAFE_INTEGER);

    // put numbers into buckets
    nums.forEach(val => {
        if (val === min || val === max) return;
        // index of the right position in the buckets
        const idx = (val - min) / gap >> 0;
        bucketsMIN[idx] = Math.min(val, bucketsMIN[idx]);
        bucketsMAX[idx] = Math.max(val, bucketsMAX[idx]);
    });

    // scan the buckets for the max gap
    let maxGap = Number.MIN_SAFE_INTEGER;
    let previous = min;

    for (let i = 0; i < nums.length - 1; i++) {
        if (bucketsMIN[i] === Number.MAX_SAFE_INTEGER && bucketsMAX[i] == Number.MIN_SAFE_INTEGER) continue;
        // min value minus the previous value is the current gap
        maxGap = Math.max(maxGap, bucketsMIN[i] - previous);
        // update previous bucket value
        previous = bucketsMAX[i];
    }

    // update the final max value gap
    maxGap = Math.max(maxGap, max - previous);

    return maxGap;
};