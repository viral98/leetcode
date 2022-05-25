function canJump(nums: number[]): boolean {
    
    if(nums.length <= 1){
        return true
    }

    let goal = nums.length - 1
    
    let currentPosition = nums.length - 2
    let canReachGoal = false
    
    const isGoalReachable = (maxJumpsThatCanBeTakenFromCurrentIndex: number, distanceToGoal: number) => {
        console.log("max jumps ",maxJumpsThatCanBeTakenFromCurrentIndex, " goalIndex", distanceToGoal )
        if(maxJumpsThatCanBeTakenFromCurrentIndex >= distanceToGoal){
            return true
        }
        return false
    }
    
    for(let i=currentPosition;i>=0;i--){
        canReachGoal = isGoalReachable(nums[i], goal - i)
        
        if(canReachGoal){
            goal = i
        }
    }
    
    return canReachGoal
};