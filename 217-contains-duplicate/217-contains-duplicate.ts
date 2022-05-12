function containsDuplicate(nums: number[]): boolean {

    const numMap:Record<number, number> ={}
    
    for(const num in nums){
        if(numMap[nums[num]] !== undefined){
            return true
        }else {
            numMap[nums[num]] = 1
        }
    }
    
    return false
};