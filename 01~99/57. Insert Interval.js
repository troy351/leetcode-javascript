/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function (intervals, newInterval) {
    const cur = new Interval(newInterval.start, newInterval.end);
    const result = [];
    let i = 0;

    while (i < intervals.length && intervals[i].end < cur.start) {
        result.push(intervals[i]);
        i++;
    }

    if (i !== intervals.length && cur.end >= intervals[i].start) {
        cur.start = Math.min(cur.start, intervals[i].start);
        while (i < intervals.length && intervals[i].start <= cur.end) {
            cur.end = Math.max(cur.end, intervals[i].end);
            i++;
        }
    }

    result.push(cur);

    while (i < intervals.length) {
        result.push(intervals[i]);
        i++;
    }

    return result;
};