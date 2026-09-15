const arr = [
  [1,  2,  3,  4],
  [5,  6,  0,  8],
  [9, 10, 11, 12],
  [0, 14, 15, 16]
]
function setMatrixZero(arr){
  
  let row = 1;
  let col = 1;

  for(let j=0; j<arr[0].length; j++){
    if(arr[0][j] === 0){
      row = 0;
    }
  }

  for(let i=0; i<arr.length; i++){
    if(arr[i][0] === 0){
      col = 0;
    }
  }

  for(let i=1; i<arr.length; i++) {
    for(let j=1; j<arr[0].length;j++) {
      if(arr[i][j] === 0) {
        arr[i][0] = 0;
        arr[0][j] = 0;
      }
    }
  }
  for(let i=1; i<arr.length; i++) {
    for(let j=1; j<arr[0].length;j++) {
      if(arr[i][0] === 0 ||arr[0][j] === 0) {
        arr[i][j] = 0;    
      }
    }
  }
  if(row === 0){
    for(let j=0; j<arr[0].length; j++){
      arr[0][j] = 0;
    }
  }
   if(col === 0){
    for(let i=0; i<arr.length; i++){
      arr[i][0] = 0;
    }
  }
  return arr;
}
console.log(setMatrixZero(arr))