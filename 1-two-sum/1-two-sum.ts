function twoSum(nums: number[], target: number): number[] {
  	const record:Record<number, number> = {};
	
	for(let i = 0; i < nums.length; i++) {
		const n = nums[i];
		if(record[target - n] !== undefined) {
			return [record[target - n], i];
		}
		record[n] = i;
	}
	return [];
};