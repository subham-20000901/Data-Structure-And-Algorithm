const arr = [-1, 2, 1, -4]
const target = 1

function threeSumClosest(arr,target){
 let closest = Infinity;
 arr.sort((a,b)=>a-b);
  for(let i=0; i<arr.length-2; i++){
    if(i>0 && arr[i] === arr[i-1]) continue;
    let l = i+1;
    let r = arr.length-1;
    while(l < r){
      let sum = arr[i] + arr[l] + arr[r];
      if(Math.abs(sum - target) < Math.abs(closest - target)){
        closest = sum;
      }

      if(sum === target){
        return sum;
      }else if(sum < target){
        l++;
      }else{
        r--;
      }
    }
  }
  return closest;
}
console.log(threeSumClosest(arr,target))