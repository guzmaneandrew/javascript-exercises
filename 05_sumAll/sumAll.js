const sumAll = function(min, max) {
  if (typeof min !== "number" || typeof max !== "number" || min < 0 || max < 0) {
    return "ERROR";
  }

  if (min > max) {
    let temp = min;
    min = max;
    max = temp;
  }

  let sum = 0;

  for (let i = 0; i <= max; i++) {
    sum += i;
  }

  return sum;   
};

// Do not edit below this line
module.exports = sumAll;
