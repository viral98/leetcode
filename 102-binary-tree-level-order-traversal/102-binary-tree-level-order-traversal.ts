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

function levelOrder(root: TreeNode | null): number[][] {

    if(!root){
        return []
    }
    const queue = [root]
    const output:number[][] = []
    
    while(queue.length > 0){
        const levelResult = []
        const levelSize = queue.length
        
        for(let i=0;i<levelSize;i++){
            const currentNode = queue.shift()
            levelResult.push(currentNode.val)
            if(currentNode.left){
                queue.push(currentNode.left)
            }
            if(currentNode.right){
                queue.push(currentNode.right)
            }
        }
        
        output.push(levelResult)
    }
    
    return output
};