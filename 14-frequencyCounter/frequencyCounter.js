function frequencyCounter(word) {
  var obj = {};

  for(let i = 0; i < word.length; i++){
    if(word.charAt(i) in obj){
      obj[word.charAt(i)] += 1;
    } else {
      obj[word.charAt(i)] = 1;
    }
  }

  return obj;

}

// Do not edit this line;
module.exports = frequencyCounter;