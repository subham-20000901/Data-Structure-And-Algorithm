const arr = [0,1,1,0,1,2,1,2,0,0,0];

function sortZerosOnesTwos(arr) {
 let mid = 0; 
 let low = 0; 
 let high = arr.length-1;

 while(mid <= high) {
    if(arr[mid] === 0) {
        [arr[low],arr[mid]] = [arr[mid],arr[low]];
        low++;
        mid++;
    }else if(arr[mid] === 1){
        mid++;
    }else{
        [arr[mid],arr[high]] = [arr[high],arr[mid]];
        high--;
    }
 }
 return arr;
}
console.log(sortZerosOnesTwos(arr))