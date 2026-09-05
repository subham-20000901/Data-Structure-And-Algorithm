const nums = [2, 7, 11, 15]
const target = 9

function twoSum(nums,target) {
 
 let map = new Map();
 let i = 0;
 for(let num of nums) {
    if(!map.has(num)) {
        map.set(num,i++)
    }
 }
 for(let i=0;i<nums.length; i++) {
    let rem = target - nums[i];

    if(map.has(rem)) {
        return [i,map.get(rem)]
    }
 }

return [];
}

console.log(twoSum(nums,target));