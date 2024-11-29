/* 
Basic 005. Determine whether a given year is a leap year in the Gregorian calendar.

Leap year conditions:
- If a year is divisible by 4 but not divisible by 100, it is a leap year. 
- If a year is divisible by 400, it is a leap year. 
*/

const sampleYears = [2016, 2015, 1600, 2000, 2400, 1700, 1800, 1900, 2100];

function isLeapYear(year) {
  return (year % 4 == 0 && year % 100 > 0) || year % 400 == 0;
}

sampleYears.forEach((year, index, array) => {
  console.log(`${array[index]}: ${isLeapYear(year)}`);
});
