const arr = [1, 2, 3, 1, 1, 1, 1, 4, 2, 3];
const K = 3;

function longestSubarray(arr,K) {
  let maxLen = 0; 
  let i = 0;
  let j = 0;
  let sum  = 0;
  while(j < arr.length) {
    sum += arr[j];
    while(sum > K) {
        sum -= arr[i];
        i++;
    }
    if(sum === K) {
        maxLen = Math.max(j-i+1,maxLen);
    }
    j++;
  }
  return maxLen;
}
console.log(longestSubarray(arr,K));