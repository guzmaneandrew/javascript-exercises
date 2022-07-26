const repeatString = function(string, numOfRepetitions) {
  if (numOfRepetitions < 0) return "ERROR";
  
  let newString = "";
    for(let i = 0; i < numOfRepetitions; i++) {
      newString += string;
    }
  return newString;    

};

// Do not edit below this line
module.exports = repeatString;
