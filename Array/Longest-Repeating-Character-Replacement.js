const s = "AABABBA";
const k = 1;

function characterReplacement(s,k){
  let left = 0;
  let maxLen = -Infinity;
  let maxFreq = 0;
  let A = new Array(26).fill(0)

  for(let right = 0; right < s.length;  right++){
    let index = s.charCodeAt(right) - 65;
    A[index]++;
    maxFreq = Math.max(maxFreq,A[index]);

    while((right-left+1) - (maxFreq) > k){
      let leftIndex = s.charCodeAt(left)-65;
      A[leftIndex]--;
      left++;
    }

    maxLen = Math.max(maxLen,right-left+1)
  }
  return maxLen;
}

console.log(characterReplacement(s,k))