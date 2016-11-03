/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (head === null || head.next === null) return head;

    var curNode = head;
    var last = head;
    head = head.next;

    while (curNode !== null && curNode.next !== null) {
        var temp = last.next = curNode.next;
        curNode.next = temp.next;
        temp.next = curNode;
        last = curNode;
        curNode = curNode.next;
    }

    return head;
};