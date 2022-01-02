function countOfAllBooleans(arr) {
  let count = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === true || arr[i] === false){
      count = count + 1;
    }
  }
  return count;
}

// Do not edit this line;
module.exports = countOfAllBooleans;