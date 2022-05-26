function uniquePaths(m: number, n: number): number {

    let row = Array(n).fill(1)
    
    for(let i=0;i<m-1;i++){
        const newRow = Array(n).fill(1)
        for(let j=n-2;j>=0;j--){
            newRow[j] = newRow[j + 1] + row[j]
        }
        row = newRow
    }
    
    return row[0]
};