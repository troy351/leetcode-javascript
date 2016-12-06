/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
    const map = new Map();

    const search = (s) => {
        //take from memory
        if (map.has(s)) return map.get(s);

        const result = [];
        //a whole string is a word
        if (wordDict.has(s)) {
            result.push(s);
        }

        for (let i = 1; i < s.length; ++i) {
            const word = s.substr(i);
            if (wordDict.has(word)) {
                result.push(...search(s.substr(0, i)).map(str => str + " " + word));
            }
        }

        //memorize
        map.set(s, result);
        return result;
    };

    return search(s);
};