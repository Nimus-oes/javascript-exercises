/* 
Basic 009. Convert temperatures to and from Celsius, Fahrenheit. 
Formula: c/5 = (f-32)/9 (where c = temperature in Celsius and f = temperature in Fahrenheit)

Expected Output:
60°C is 140 °F
45°F is 7.222222222222222°C
*/

function fahrenheitToC(value) {
  return ((value - 32) / 9) * 5;
}

function celsiusToF(value) {
  return (value / 5) * 9 + 32;
}

function tempConverter(from, value) {
  return from.toLowerCase() === "c" ? celsiusToF(value) : fahrenheitToC(value);
}

console.log(tempConverter("c", 60));
