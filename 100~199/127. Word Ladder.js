/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {Set} wordList
 *   Note: wordList is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
    if (beginWord == endWord) return 0;

    let len = 0, found = false;
    let forward = new Set(), backward = new Set(), visited = new Set();

    forward.add(beginWord);
    backward.add(endWord);

    while (forward.size !== 0 && !found) {
        if (forward.size > backward.size) [forward, backward] = [backward, forward];

        const nextLevel = new Set();
        forward.forEach(w=> {
            const word = w.split('');
            for (let i = 0; i < word.length; i++) {
                const code = word[i].charCodeAt(0), original = word[i];
                // try every lowercase alphabetic characters
                for (let l = 1; l <= 26; l++) {
                    if (l + 96 === code) continue;
                    word[i] = String.fromCharCode(l + 96);
                    const newWord = word.join('');
                    if (backward.has(newWord)) {
                        found = true;
                        return false;
                    }
                    if (!visited.has(newWord) && wordList.has(newWord)) {
                        nextLevel.add(newWord);
                        visited.add(newWord);
                    }
                }
                word[i] = original;
            }
        });

        len++;
        forward = nextLevel;
    }


    return found ? len + 1 : 0;
};