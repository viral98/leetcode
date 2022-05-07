function lengthOfLongestSubstring(s: string): number {
    let maxLength = 0
    let left = 0
    const charSet = new Set()
    
    for (let right = 0; right < s.length; right++){
        while (charSet.has(s[right])){
            charSet.delete(s[left])
            left += 1
        }
        charSet.add(s[right])
        maxLength = Math.max(maxLength, right - left + 1)
    }
    
    return maxLength
};