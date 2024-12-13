/*
Basic 072. 
Find the number appearing most frequently in a given array of integers. 
*/

function getMostFrequent(numArray) {
  const count = {};
  let frequentItem = 0;
  let frequency = 0;

  // Loop through the array to count the item and its frequency in an object
  numArray.forEach((num) => {
    count[num] = count[num] ? count[num] + 1 : 1;
  });

  // Loop through the object to update the frequency value
  for (const item in count) {
    if (count[item] > frequency) {
      frequentItem = item;
      frequency = count[item];
    }
  }

  return frequentItem;
}

console.log(getMostFrequent([1, 2, 3, 2, 2, 8, 1, 9]));
