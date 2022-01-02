function pairSum(nums, target) {
  if(nums.length <= 1){
    throw new Error();
  } 

  for(let i = 0; i < nums.length; i++){
     if(nums.includes(target-nums[i])){
       return true;
     }
   }

   return false;
}

// Do not edit this line;
module.exports = pairSum;