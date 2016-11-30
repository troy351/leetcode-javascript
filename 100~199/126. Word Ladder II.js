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
    const forward = new Set(), backward = new Set(), tree = new Map();
    let reversed = false;

    wordList.forEach(word=> {
        tree.set(word, new Set());
    });

    tree.set(beginWord, new Set());
    tree.set(endWord, new Set());
    forward.add(beginWord);
    backward.add(endWord);

    const buildTree = (forward, backward, reversed)=> {
        if (forward.size === 0) return false;
        if (forward.size > backward.size) return buildTree(backward, forward, !reversed);

        forward.forEach(word=>wordList.delete(word));
        backward.forEach(word=>wordList.delete(word));

        const nextLevel = new Set();
        let done = false;

        forward.forEach(w=> {
            const word = w.split('');
            for (let i = 0; i < word.length; i++) {
                const code = word[i].charCodeAt(0), original = word[i];
                for (let l = 1; l <= 26; l++) {
                    if (l + 96 === code) continue;
                    word[i] = String.fromCharCode(l + 96);
                    const newWord = word.join('');
                    if (backward.has(newWord)) {
                        done = true;
                        !reversed ? tree.get(w).add(newWord) : tree.get(newWord).add(w);
                    } else if (!done && wordList.has(newWord)) {
                        nextLevel.add(newWord);
                        !reversed ? tree.get(w).add(newWord) : tree.get(newWord).add(w);
                    }
                }
                word[i] = original;
            }
        });

        return done || buildTree(nextLevel, backward, reversed);
    };

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

    buildTree(forward, backward, reversed);
    getPath(beginWord, endWord);
    return paths;
};