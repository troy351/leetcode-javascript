/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    var priorityQueue = [];
    priorityQueue.add = function (item) {
        if (item === null) return;
        for (var i = 0; i < this.length; i++) {
            if (this[i].val < item.val) break;
        }
        this.splice(i, 0, item);
    };

    for (var i = 0; i < lists.length; i++) priorityQueue.add(lists[i]);
    var head = priorityQueue.pop();

    if (head === undefined || head === null) return null;

    priorityQueue.add(head.next);
    var curNode = head;

    while (priorityQueue.length > 0) {
        curNode.next = priorityQueue.pop();
        curNode = curNode.next;
        priorityQueue.add(curNode ? curNode.next : null);
    }

    return head;
};