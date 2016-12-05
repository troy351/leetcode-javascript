/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function (head) {
    let node = head, next;

    // First round: make copy of each node,
    // and link them together side-by-side in a single list.
    while (node !== null) {
        next = node.next;

        const copy = new RandomListNode(node.label);
        node.next = copy;
        copy.next = next;

        node = next;
    }

    // Second round: assign random pointers for the copy nodes.
    node = head;
    while (node !== null) {
        if (node.random !== null) {
            node.next.random = node.random.next;
        }
        node = node.next.next;
    }

    // Third round: restore the original list, and extract the copy list.
    node = head;
    const pseudoHead = new RandomListNode(0);
    let copyNode = pseudoHead;

    while (node !== null) {
        next = node.next.next;

        // extract the copy
        const copy = node.next;
        copyNode.next = copy;
        copyNode = copy;

        // restore the original list
        node.next = next;

        node = next;
    }

    return pseudoHead.next;
};