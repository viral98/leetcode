function findMin(nums: number[]): number {

    let res = nums[0]
    let l = 0, r = nums.length - 1
    
    while(l<=r){
        if(nums[l] < nums[r]){
            res = Math.min(res, nums[l])
            break
        }
        
        let m = Math.round((l + r) / 2)
        
        res = Math.min(res, nums[m])
        
        if(nums[m] >= nums[l]){
            l = m + 1
        }else{
            r = m -1
        }
        
    }
    
    return res
};