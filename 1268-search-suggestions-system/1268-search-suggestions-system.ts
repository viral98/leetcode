function suggestedProducts(products: string[], searchWord: string): string[][] {

    const MAX_WORDS_TO_BE_RETURNED = 3
    const result = []
    products.sort()
    
    let left =0, right = products.length - 1
    
    for(let i=0;i<searchWord.length;i++){
        
        let c = searchWord[i]
        
        while(left <= right && (products[left].length <= i || products[left][i] != c)){
            left++
        }
        
        while(left <= right && (products[right].length <= i || products[right][i] != c)){
            right--;
        }
        
        let tempArray = []
        
        let remaining = right - left + 1
        
        for(let j=0;j < Math.min(MAX_WORDS_TO_BE_RETURNED, remaining); j++){
            tempArray.push(products[left + j])
        }
        
        result.push(tempArray)
    }
    
    return result
};