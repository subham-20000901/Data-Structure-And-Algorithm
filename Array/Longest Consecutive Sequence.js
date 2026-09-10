const arr =[0, 3, 7, 2, 5, 8, 4, 6, 0, 1];

function longestConsecutive(arr){
 let max = -Infinity;
 let set = new Set(arr);

 for(let num of set){
    if(!set.has(num-1)){
        let current = num;
        let count = 1;
        while(set.has(current + 1)){
            current++;
            count++;
        }
        max = Math.max(max,count);
    }
 }
 return max;
}
console.log(longestConsecutive(arr))