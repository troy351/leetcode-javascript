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
var insertionSortList = function (head) {
    if (head === null) return null;

    //new starter of the sorted list
    const helper = new ListNode(0);
    //the node will be inserted
    let cur = head;
    //insert node between pre and pre.next
    let pre = helper;
    //the next node will be inserted
    let next = null;
    //not the end of input list
    while (cur !== null) {
        next = cur.next;
        //find the right place to insert
        while (pre.next !== null && pre.next.val < cur.val) {
            pre = pre.next;
        }
        //insert between pre and pre.next
        cur.next = pre.next;
        pre.next = cur;
        pre = helper;
        cur = next;
    }

    return helper.next;
};