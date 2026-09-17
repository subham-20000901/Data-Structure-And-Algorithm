const nums = [-1, 0, 1, 2, -1, -4]

function threeSum(nums) {
  const result = [];

  // Sort numerically
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicate first elements
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // Since the array is sorted, no triplet is possible
    if (nums[i] > 0) break;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        left++;
        right--;

        // Skip duplicate values
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }

        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

console.log(threeSum(nums))