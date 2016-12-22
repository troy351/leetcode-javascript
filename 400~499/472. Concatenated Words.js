/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function (words) {
    const canForm = (word, dict) => {
        if (dict.size === 0) return false;
        const dp = Array.from({length: word.length + 1}).fill(false);
        dp[0] = true;
        for (let i = 1; i <= word.length; i++) {
            for (let j = 0; j < i; j++) {
                if (!dp[j]) continue;
                if (dict.has(word.substring(j, i))) {
                    dp[i] = true;
                    break;
                }
            }
        }
        return dp[word.length];
    };

    const result = [];
    const preWords = new Set();
    words.sort((a, b) => a.length - b.length);

    words.forEach(w => {
        if (canForm(w, preWords)) result.push(w);
        preWords.add(w);
    });

    return result;
};