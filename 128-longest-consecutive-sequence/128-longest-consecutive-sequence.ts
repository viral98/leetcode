function longestConsecutive(nums: number[]): number {
    if (nums == null || nums.length === 0) return 0;
    const numSet = new Set(nums)
    
    let longest = 0
    
    for(let n of nums){
        
        
        if(!numSet.has(n-1)){
           let length = 0
            
            while(numSet.has(n + length)){
                length++
            }
            
            longest = Math.max(length, longest)
        }
    }
    return longest
};