function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return []; 
  
}


const nums = [6,3,5,4,9,15,8,1];
const target = 8;
const result = twoSum(nums, target);
console.log(result); 


