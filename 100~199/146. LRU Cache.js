/**
 * @constructor
 */
var LRUCache = function (capacity) {
    this.map = new Map();
    this.capacity = capacity;
    this.order = [];
};

/**
 * @param {number} key
 * @returns {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.map.has(key)) {
        this.updateOrder(key);
        return this.map.get(key);
    }
    return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @returns {void}
 */
LRUCache.prototype.set = function (key, value) {
    if (this.map.has(key)) {
        this.map.set(key, value);
        this.updateOrder(key);
    } else {
        if (this.order.length >= this.capacity) {
            this.map.delete(this.order.shift());
        }
        this.order.push(key);
        this.map.set(key, value);
    }
};

/**
 * @param {number} key
 * @returns {void}
 */
LRUCache.prototype.updateOrder = function (key) {
    this.order.splice(this.order.indexOf(key), 1);
    this.order.push(key);
};