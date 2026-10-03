const  arr = [2,3,1,2,4,3]
const target = 7;

function minSubArrayLen(arr,target){
  let sum = 0;
  let low = 0;
  let high = 0;
  let min  = Infinity;
  while(high < arr.length){
    sum += arr[high];
    
    while(sum >= target){
      let length = high - low + 1;
      min = Math.min(min,length);
      sum -= arr[low];
      low++;
    }
    high++;
  }
  return min;
}
console.log(minSubArrayLen(arr,target))