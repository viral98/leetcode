function rob(nums: number[]): number {

    let fast =0
    let slow =0
    
    for(let i=0;i<nums.length;i++){
        let temp = Math.max(nums[i] + slow, fast)
        slow = fast
        fast = temp
    }
    
    return fast
};