
const arr = [1, 2, -3, -4, 5, -6]

function rearrangeBySign(arr){
let pos = 0;
  let neg = 1;
  let ans = [];

  for(let i=0; i<arr.length; i++) {
    if(arr[i] > 0) {
      ans[pos] = arr[i];
      pos += 2;
    }else{
      ans[neg] = arr[i];
      neg += 2;
    }
  }
  return ans;
}
console.log(rearrangeBySign(arr))