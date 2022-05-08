function convert(s: string, numRows: number): string {
  if(numRows === 1 || s.length <= numRows) return s;
    
    const grid = Array(numRows).fill('');
    let iterator = 0, down = true;
    
    for(let character of s) {
        grid[iterator] += character;
        down ? iterator++ : iterator--;
        if(iterator === numRows-1 || !iterator) down = !down;
    }
    return grid.join('')
};