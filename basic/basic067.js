/*
Basic 067. 
Write a program that takes two integers and a divisor. 
If the given divisor divides both integers or does not divide either, 
two specified integers are similar. 
Check whether two integers are similar or not.
*/

function similarNum(numX, numY, divisor) {
  return (
    (numX % divisor === 0 && numY % divisor === 0) ||
    (numX % divisor !== 0 && numY % divisor !== 0)
  );
}

console.log(similarNum(10, 20, 4));
