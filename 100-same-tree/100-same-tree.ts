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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {

    const dfs = (tree1: TreeNode | null, tree2: TreeNode | null) => {
        if(!tree1 || !tree2){
            if(!tree2 && !tree1){
                return true
            }else{
                return false
            }
        }
        if(tree1.val !== tree2.val){
            return false
        }else{
            return dfs(tree1.left, tree2.left) && dfs(tree1.right, tree2.right)
        }
    }
    
    return dfs(p, q)
};