function rob(nums: number[]): number {

    if(nums.length == 1){
        return nums[0]
    }
    const houseRobberOneSolution = (subsetOfHouses: number[]) =>{
        let fast =0
        let slow =0
    
        for(let i=0;i<subsetOfHouses.length;i++){
            let temp = Math.max(subsetOfHouses[i] + slow, fast)
            slow = fast
            fast = temp
        }

        return fast
    }
    
    
    return Math.max(houseRobberOneSolution(nums.slice(1)), houseRobberOneSolution(nums.slice(0, nums.length-1)))
};