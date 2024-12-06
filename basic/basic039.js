/* 
Basic 039. 
Divide two positive numbers and return the result 
as string with properly formatted commas.  
*/

function divWithSeparator(num1, num2) {
  if (num2 === 0) {
    return "Cannot divide by zero.";
  }

  return (num1 / num2).toLocaleString();
}

console.log(divWithSeparator(100000000, 3));
