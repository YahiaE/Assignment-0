function titleCaseEdit(title) {
  let arr = title.split(" ");
  for(let i = 0; i < arr.length; i++){
      arr[i] = arr[i].toUpperCase().charAt(0) + arr[i].substring(1);
  }
    
  return arr.join(" ");
}

// Do not edit this line; 
module.exports = titleCaseEdit;