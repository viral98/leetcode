function jump(nums: number[]): number {

    let numberOfJumpsTaken = 0
    let left = 0
    let right = 0
    
    while(right < nums.length -1 ){
        let farthestReachable = 0
        
        for(let i=left; i<=right;i++){
            farthestReachable = Math.max(farthestReachable, i + nums[i])
        }
        left = right + 1
        right = farthestReachable
        numberOfJumpsTaken++;
    }
    
    return numberOfJumpsTaken
};