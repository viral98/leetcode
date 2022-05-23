/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxDepth(root: TreeNode | null): number {

    
    
    if(!root){
        return 0
    }
    
    const stack = [[root, 1]];
    let maxDepth = 1
    
    
    while(stack.length > 0){
        let curr = stack.pop()
        const currentNode = curr[0] as TreeNode | null
        const depth = curr[1] as number
        
        
        if(currentNode){
            maxDepth = Math.max(maxDepth, depth)
            stack.push([currentNode.right, depth+1])
            stack.push([currentNode.left, depth+1])
        }
            
        
        
    }
    
    return maxDepth
};