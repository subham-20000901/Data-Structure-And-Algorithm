const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function maxsubarraySum(arr) { 
  let currSum = 0;
  let max = -Infinity;

  for(let i=0; i<arr.length; i++) {
    if(arr[i] > currSum+arr[i]) {
      currSum = arr[i];
    }else{
      currSum = currSum+arr[i];
    }

    max = Math.max(max,currSum);
  }
 return max;
}

console.log(maxsubarraySum(arr))