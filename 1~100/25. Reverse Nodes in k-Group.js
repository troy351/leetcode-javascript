/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    var list = getKNodes(head, k);
    if (list.length < k) return head;

    var prev = head;
    head = reverse(list, {});

    while (true) {
        var listHead = prev.next;
        list = getKNodes(listHead, k);
        if (list.length < k) break;
        reverse(list, prev);
        // now, listHead becomes list tail
        prev = listHead;
    }

    return head;

    /**
     * reverse nodes in list, connect with prev, return head
     * @param {ListNode[]} list, the k node list waiting for reverse
     * @param {ListNode} prev, the previous node before the list
     * @returns {ListNode} the head of the list after reverse
     */
    function reverse(list, prev) {
        // connect tail (as the head after reverse) with the previous node
        prev.next = list[list.length - 1];
        // save the node after list
        var end = prev.next.next;

        for (var i = list.length - 1; i > 0; i--) {
            list[i].next = list[i - 1];
        }

        // connect head (as the tail after reverse) with the following node
        list[0].next = end;

        return list[list.length - 1];
    }

    function getKNodes(node, k) {
        var result = [];
        var temp = node;
        while (k-- > 0 && temp !== null) {
            result.push(temp);
            temp = temp.next;
        }
        return result;
    }
};