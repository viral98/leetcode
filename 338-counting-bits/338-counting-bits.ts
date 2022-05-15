function countBits(n: number): number[] {
 const arr = [0, 1, 1];
  
  for (let i=3; i<=n; i++){
    let even = 0;
    let temp = i;
    let odd = 0;
    if((i/2) !== Math.floor(i/2)){
      even +=1;
      temp = i-1;
    }
      odd = arr[temp/2];
      arr.push(even + odd);
    
  }
  
  return arr.slice(0, n+1);
};