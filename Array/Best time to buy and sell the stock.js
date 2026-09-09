const arr = [7, 1, 5, 3, 6, 4];

function bestTimeToBuyAndSell(arr) {
  let min = Infinity;
  let max = -Infinity;
  for(let i=0; i<arr.length; i++){
    min = Math.min(min,arr[i]);
    let profit = arr[i] - min;
    max = Math.max(max,profit);
  }
  return max;
}
console.log(bestTimeToBuyAndSell(arr))