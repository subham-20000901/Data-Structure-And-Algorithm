const arr = [5,0,1,4];
const k = 3;

function firstStableIndex(arr,k) {
  let max = -Infinity;
  
  let i= 0; 
  let j=0;
  while(i<arr.length) {
    if(max < arr[i]) {
      max  = arr[i];
    }
    j = i;
   let min = Infinity;
    while(j<arr.length){
      if(min > arr[j]){
        min = arr[j];
      }
      j++;
    }
    let r = max - min ;
    if(r <= k){
      return i;
    }
    i++;
  }
  return -1;
}
console.log(firstStableIndex(arr,k))