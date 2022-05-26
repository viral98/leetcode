function combinationSum4(nums: number[], target: number): number {
    let cache = Array(target + 1).fill(0);
    cache[0] = 1;
    
    for (let amount = 1; amount < cache.length; amount++) {
        nums.forEach(number => {
            const diff = amount - number;
            
            if (diff >= 0)
                cache[amount] += cache[diff];
        });
    }
    
    return cache[cache.length - 1];
};