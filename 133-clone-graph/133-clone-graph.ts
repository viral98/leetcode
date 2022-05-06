/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

function cloneGraph(node: Node | null): Node | null {
	const trackHashMap:Record<number, Node> = {}
    
    return generateCloneGraph(node)
    
    function generateCloneGraph(incomingNode: Node){
        if(!incomingNode) return node
        
        //The node hasn't been added to our hashmap
        if(!trackHashMap[incomingNode.val]){
            trackHashMap[incomingNode.val] = new Node(incomingNode.val)
            
            //Recursively loop around this function, running the same algorithm for all it's neighbours
            trackHashMap[incomingNode.val].neighbors = incomingNode.neighbors.map(generateCloneGraph)
        }
        
        return trackHashMap[incomingNode.val]
    }
    
};