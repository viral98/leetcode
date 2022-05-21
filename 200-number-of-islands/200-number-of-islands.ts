const LAND = "1";
const WATER = "0";
const directions = [
    [0,1], [1,0], [0,-1], [-1,0]
]
function numIslands(grid: string[][]): number {
    if(!grid.length){
        return 0;
    }
    
    let numberOfIslands = 0;
    for(let row =0; row < grid.length; row++){
        for(let column=0; column < grid[0].length; column++){
            if(grid[row][column] === LAND){
                numberOfIslands++;
                bfs(grid, row, column)
            }
        }
    }
    
    return numberOfIslands
};

function bfs(grid: string[][], row: number, column:number){
    let queue = [[row, column]]
    
    //This is how we maintain our "visit set"
    grid[row][column] = WATER;
    
    while(queue.length){
        let size = queue.length
        for(let i=0;i< size;i++){
            let [currentRow, currentColumn] = queue.pop()
            
            for(let [x,y] of directions){
                let newRowToCheck = currentRow + x;
                let newColumnToCheck = currentColumn + y
                
                if(isInvalid(newRowToCheck, newColumnToCheck, grid)){
                    continue
                }
                
                grid[newRowToCheck][newColumnToCheck] = WATER;
                queue.unshift([newRowToCheck, newColumnToCheck])
            }
        }
    }
}

function isInvalid(row:number, column:number, grid:string[][]){
    const rowInvalid = row < 0 || row >= grid.length
    const colInvalid = column <0 || column >= grid[0].length
    
    return rowInvalid || colInvalid ||  grid[row][column] === WATER
}