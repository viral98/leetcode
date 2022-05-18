function lengthOfLIS(nums: number[]): number {

    const LIS  = Array(nums.length).fill(1)
    
    for(let i=0;i<nums.length;i++){
        for(let j=i-1; j >=0; j--){
            if(nums[j] < nums[i]){
                LIS[i] = Math.max(LIS[i], LIS[j] +1)
            }
        }
    }
    
    return Math.max(...LIS)
};