function productOfAnyAmountOfNumbers(...args) {
  let res = 1;
  for(let i = 0; i < arguments.length; i++){
    res*=arguments[i];
  }
  return res;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;