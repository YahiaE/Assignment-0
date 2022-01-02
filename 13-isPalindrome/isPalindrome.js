function isPalindrome(word) {
  for(let i = 0; i < word.length/2; i++){
    if(word.charAt(i) != word.charAt(word.length - 1 - i)){
      return false;
    }
  }

  return true;
}

// Do not edit this line;
module.exports = isPalindrome;