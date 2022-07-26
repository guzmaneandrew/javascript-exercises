const removeFromArray = function(...args) {
  let newArray = [];
  let array = args[0];
  //Also a solution, but overcomplicated things!
  // let elementsToRemove = new Set(args.slice(1, args.length));

  // for(let i = 0; i < array.length; i++) {
  //   if(!elementsToRemove.has(array[i])) {
  //     newArray.push(array[i]);
  //   }
  // }
  
  //Simpler solution that uses the function arguments
  array.forEach((item) => {
    if(!args.includes(item)) {
      newArray.push(item);
    }
  });


  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
