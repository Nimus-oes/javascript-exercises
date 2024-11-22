/* 
Basic 001. Display the current day and time in the following format:
Today is Tuesday. Current time is 10 PM:30:38 
*/

// Create a date object
const dateObj = new Date();

// Get the day of the week with the getDay() method.
// The returned values start from Sunday at 0 to Saturday at 6.
const day = dateObj.getDay();

// Create a list of days and make the order of items match the value of getDay().
const daysSet = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Display the current day.
console.log(`Today is ${daysSet[day]}`);

// Get local hours data
const hours = dateObj.getHours();

// Convert the hours to 12-hour format with AM or PM period
// Special cases (1): Noon represents PM while midnight represents AM
// Special cases (2): Display 0 hour value as 12 (e.g. 0 AM:30:00 to 12 AM:30:00)
function formatHours() {
  let hourNumber = hours <= 12 ? hours : hours - 12;
  hourNumber = hourNumber == 0 ? 12 : hourNumber;
  const period = hours == 24 || hours < 12 ? "AM" : "PM";
  return `${hourNumber} ${period}`;
}

const formattedHours = formatHours();

// Get local minutes and seconds data
const minutes = dateObj.getMinutes();
const seconds = dateObj.getSeconds();

console.log(`Current time is ${formattedHours}:${minutes}:${seconds}`);
