const arr = [-4,-1,0,3,10];

function square(arr){
 let l= 0;
let r = arr.length -1 ;
let result = new Array(arr.length)
  
  for(let i=r ; i>=0; i--){
    if(Math.abs(arr[l]) < Math.abs(arr[r])){
      result[i] = arr[r] ** 2;
      r--;
    }else{
      result[i] = arr[l] ** 2;
      l++;
    }
  }
  return result;
}
console.log(square(arr));