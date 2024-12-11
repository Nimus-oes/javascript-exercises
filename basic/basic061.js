/*
Basic 061. 
Swap the first and last elements of a given array of integers. 
The array length should be at least 1.  
*/

function isNumValidated(value, state, criteria) {
  const keywords = {
    equal: value === criteria,
    "equal or greater": value >= criteria,
    "equal or less": value <= criteria,
    greater: value > criteria,
    less: value < criteria,
  };
  return keywords[state];
}

// 1. Using map function
// function swapFirstLast(array) {
//   if (!isNumValidated(array.length, "equal or greater", 1)) {
//     return "The array length should be at least 1.";
//   }

//   const last = array.length - 1;
//   return array.map((elem, index, arr) =>
//     [0, last].includes(index) ? arr[last - index] : elem,
//   );
// }

// 2. Using destructuring assignment
function swapFirstLast(array) {
  if (!isNumValidated(array.length, "equal or greater", 1)) {
    return "The array length should be at least 1.";
  }

  const [first, last] = [array[0], array[array.length - 1]];
  return [last, ...array.slice(1, array.length - 1), first];
}

console.log(swapFirstLast(["a", "b", "c", "d", "e"]));
