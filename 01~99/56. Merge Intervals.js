/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function (intervals) {
    if (intervals.length <= 1) return intervals;
    intervals.sort((a, b)=>a.start === b.start ? a.end - b.end : a.start - b.start);

    let cur = intervals[0];
    const result = [];
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i].start <= cur.end) {
            cur.end = Math.max(intervals[i].end, cur.end);
        } else {
            result.push(cur);
            cur = intervals[i];
        }
    }
    result.push(cur);

    return result;
};