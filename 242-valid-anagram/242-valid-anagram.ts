function isAnagram(s: string, t: string): boolean {

    if(s.length !== t.length){
        return false
    }
    if(s === "" && t === ""){
        return true
    }
    
    const firstString:Record<string, number> = {}
    const secondString:Record<string, number> = {}
    
    for(let i=0;i<s.length;i++){
        if(firstString[s[i]]){
            firstString[s[i]] = firstString[s[i]] + 1
        }else{
            firstString[s[i]] = 1
        }
        
        if(secondString[t[i]]){
            secondString[t[i]] = secondString[t[i]] + 1
        }else{
            secondString[t[i]] = 1
        }
    }
    
    let result = true
    Object.keys(firstString).map((key)=>{
        
        console.log(firstString[key], secondString[key], key, firstString[key] !== secondString[key])
        if(firstString[key] !== secondString[key] || secondString[key] === undefined){
            result = false
        }
    })
    
    return result
};