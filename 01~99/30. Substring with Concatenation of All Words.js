/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    var ss = s;
    var result = [];
    var length = words[0].length;
    var wordsMap = {};
    for (i = 0; i < words.length; i++) {
        if (wordsMap[words[i]]) wordsMap[words[i]].count++;
        else wordsMap[words[i]] = {count: 1};
    }

    for (var k = 0; k < length; k++) {
        s = ss.substr(k);
        var counts = words.length;
        var i, start = -1;
        // if there was no words in `wordsMap` shown in `s`, just try next `k`
        // this saves 90% time
        for (i = 0; i < s.length; i += length) {
            if (wordsMap[s.substr(i, length)]) break;
        }
        if (i >= s.length) continue;

        // init wordsMap pos
        for (var key in wordsMap) {
            wordsMap[key].pos = [];
        }

        for (i = 0; i < s.length; i += length) {
            var word = s.substr(i, length);
            if (wordsMap[word]) {
                if (wordsMap[word].pos.length < wordsMap[word].count) {
                    // still can shown
                    start = start === -1 ? i : start;
                    wordsMap[word].pos.push(i);
                    counts--;
                } else {
                    // times out
                    start = wordsMap[word].pos.shift() + length;
                    // remove positions before new start
                    for (key in wordsMap) {
                        while (wordsMap[key].pos[0] < start) {
                            wordsMap[key].pos.shift();
                            counts++;
                        }
                    }
                    wordsMap[word].pos.push(i);
                }
            } else {
                // does not exists, reset wordsMap
                for (key in wordsMap) {
                    wordsMap[key].pos = [];
                }
                counts = words.length;
                start = -1;
            }

            if (counts === 0) {
                // found one solution
                result.push(start + k);
                start = wordsMap[s.substr(start, length)].pos.shift() + length;
                counts++;
            }
        }
    }
    return result;
};