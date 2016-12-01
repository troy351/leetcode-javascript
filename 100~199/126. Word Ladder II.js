/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {Set} wordList
 *   Note: wordList is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
    if (beginWord == endWord) return [];

    const paths = [], path = [beginWord];
    let forward = new Set(), backward = new Set();
    const tree = new Map();
    let reversed = false, found = false;

    wordList.delete(beginWord);
    wordList.delete(endWord);
    wordList.forEach(word=> {
        tree.set(word, new Set());
    });
    tree.set(beginWord, new Set());
    tree.set(endWord, new Set());

    forward.add(beginWord);
    backward.add(endWord);

    while (forward.size !== 0 && !found) {
        if (forward.size > backward.size) {
            [forward, backward] = [backward, forward];
            reversed = !reversed;
        }

        const nextLevel = new Set();
        forward.forEach(w=> {
            const word = w.split('');
            for (let i = 0; i < word.length; i++) {
                const code = word[i].charCodeAt(0), original = word[i];
                for (let l = 1; l <= 26; l++) {
                    if (l + 96 === code) continue;
                    word[i] = String.fromCharCode(l + 96);
                    const newWord = word.join('');
                    if (backward.has(newWord)) {
                        reversed ? tree.get(newWord).add(w) : tree.get(w).add(newWord);
                        found = true;
                    } else if (!found && wordList.has(newWord)) {
                        reversed ? tree.get(newWord).add(w) : tree.get(w).add(newWord);
                        nextLevel.add(newWord);
                    }
                }
                word[i] = original;
            }
        });

        nextLevel.forEach(word=> {
            wordList.delete(word);
        });
        forward = nextLevel;
    }

    const getPath = (beginWord, endWord)=> {
        if (beginWord === endWord) {
            paths.push(path.slice());
        } else {
            tree.get(beginWord).forEach(word=> {
                path.push(word);
                getPath(word, endWord);
                path.pop();
            });
        }
    };

    getPath(beginWord, endWord);
    return paths;
};