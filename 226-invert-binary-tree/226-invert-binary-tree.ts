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

function invertTree(root: TreeNode | null): TreeNode | null {

    const dfs = (root: TreeNode|null) =>{
        if(!root){
            return null
        }
        
        if(root.right && root.left){
            const tempRight = root.right
            root.right = root.left
            root.left = tempRight
        }else if(root.right){
            root.left = root.right
            root.right = null
        }else if(root.left){
            root.right = root.left
            root.left = null
        }
        
        dfs(root.right)
        dfs(root.left)
    }
    
    dfs(root)
    
    return root
};