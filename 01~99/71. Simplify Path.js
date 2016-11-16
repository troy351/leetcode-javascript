/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    const folders = path.split('/').filter(v=>v).reverse(), result = [];

    while (folders.length) {
        const f = folders.pop();
        if (f === '..') {
            result.pop();
        } else if (f === '.') {
            // do nothing
        } else {
            result.push(f);
        }
    }

    return `/${result.join('/')}`;
};