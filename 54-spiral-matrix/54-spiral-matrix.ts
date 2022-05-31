function spiralOrder(matrix: number[][]): number[] {
    const m = matrix.length;    // row of matrix
    const n = matrix[0].length; // column of matrix

    let result = [];  // return value

    /* initial 4 variable for each border's started position */
    let topBorder = 0; 
    let bottomBorder = m-1;
    let leftBorder = 0;
    let rightBorder = n-1;

    while(result.length < m*n){   
        // maintain result value inside this while loop. until result lenght is up to m*n

      //forloop topBorder (left -> right) then update topBorder
       if(topBorder <= bottomBorder){
           for(let i=leftBorder; i<=rightBorder; i++){
            result.push(matrix[topBorder][i])
          }
        topBorder++
      }

      //forloop rightBorder (top -> down) then update rightBorder
      if(leftBorder<=rightBorder){
         for(let i=topBorder; i<=bottomBorder; i++){
            result.push(matrix[i][rightBorder])
          }
         rightBorder--
      }


      //forloop bottomBorder (right -> left) then update bottomBorder
        if(topBorder <= bottomBorder){
         for(let i=rightBorder; i>=leftBorder; i--){
            result.push(matrix[bottomBorder][i])
          }
         bottomBorder--
      }

      //forloop leftBorder  (down -> top) then update leftBorder
       if(leftBorder<=rightBorder){
         for(let i=bottomBorder; i>=topBorder; i--){
            result.push(matrix[i][leftBorder])
          }
        leftBorder++
      }

    } 
    return result;
};