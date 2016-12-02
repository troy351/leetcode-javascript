/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */
/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function (graph) {
    if (graph === null) return null;

    const map = new Map();

    const clone = (node) => {
        if (map.has(node.label)) return map.get(node.label);

        const copy = new UndirectedGraphNode(node.label);
        map.set(copy.label, copy);
        node.neighbors.forEach(neighbor=> {
            copy.neighbors.push(clone(neighbor));
        });
        return copy;
    };

    return clone(graph);
};