const arr =  [5, 1, 3, 4, 7]
const sum  = 12

function threeSumSmaller(arr,sum) {
  arr.sort((a,b) => a-b);
  let ans = 0;
  for(let i=0; i<arr.length-2; i++){
    let left = i+1;
    let right = arr.length-1;
    while(left < right){
      let s = arr[i] + arr[left] + arr[right];
      if(s >= sum){
        right--;
      }else{
        ans = ans + (right - left);
        left++;
      }
    }
  }
  return ans;
}
console.log(threeSumSmaller(arr,sum))