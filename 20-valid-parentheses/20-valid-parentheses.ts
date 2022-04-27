
function isValid(s: string): boolean {
    const median = Math.round(s.length/2)
    const stack = []
    const stackHash:Record<string, string> = {"(": ")", "[": "]", "{": "}"}
    
    
    for(let i=0;i<s.length;i++){
        const currentElement = s[i]
        
        if(stackHash[currentElement]){
            stack.push(currentElement)
        }else{
            if(stackHash[stack.pop()] !== currentElement ){
                return false
            }
        }
    }
    
    if(stack.length > 0){
        return false
    }
    
    return true
};