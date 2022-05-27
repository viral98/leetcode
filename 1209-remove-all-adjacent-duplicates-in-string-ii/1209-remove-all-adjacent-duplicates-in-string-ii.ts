const CHARACTER = 0
const NUMBER_OF_REPEATS =1

function removeDuplicates(s: string, k: number): string {

    const stack = []
    stack.push([s[0] , 1])
    
    for(let i=1;i<s.length;i++){
        
        const top = stack[stack.length-1]

        if(top && top[CHARACTER] === s[i]){
            top[NUMBER_OF_REPEATS]++;

            if(top[NUMBER_OF_REPEATS] === k){
                stack.pop()
            }else{
                stack.pop()
                stack.push(top)
            }
        }else{
            stack.push([s[i], 1])
        }
    }
       
    
    let newString =""
    
    stack.map((character) => {
        for(let i=0;i<character[NUMBER_OF_REPEATS];i++){
            newString += character[CHARACTER]
        }
    })
    
    return newString
};