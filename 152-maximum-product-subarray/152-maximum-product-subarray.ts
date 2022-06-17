function maxProduct(nums: number[]): number {
    let res = Math.max(...nums),
        currMin = 1,
        currMax = 1,
        prevMax = 1
    
    for (const num of nums){
        prevMax = currMax * num
        currMax = Math.max(prevMax, currMin*num, num)
        currMin = Math.min(prevMax, currMin*num, num)
        
        res = Math.max(res, currMax)
    }
    return res
};