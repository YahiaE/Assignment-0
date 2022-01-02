function setUnionOfAnyAmountOfSets(...args) {
  let obj = new Set();
  for(let i = 0; i < arguments.length; i++){
    let set = arguments[i];
    for(let item of set){
      if(!obj.has(item)){
        obj.add(item);
      }
    }
  }
  
  
  return obj
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;