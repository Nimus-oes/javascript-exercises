/* 
Basic 001. Display the current day and time in the following format:
Today is Tuesday. Current time is 10 PM:30:38 
*/

function getTodayDay() {
  const dateObj = new Date();
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

  return daysSet[day];
}

function formatHours(hours) {
  let hourNumber = hours <= 12 ? hours : hours - 12;
  hourNumber = hourNumber == 0 ? 12 : hourNumber;
  const period = hours == 24 || hours < 12 ? "AM" : "PM";
  return `${hourNumber} ${period}`;
}

function getCurrentTime() {
  const dateObj = new Date();
  const hours = dateObj.getHours();
  const formattedHours = formatHours(hours);
  const minutes = dateObj.getMinutes();
  const seconds = dateObj.getSeconds();
  return `${formattedHours}:${minutes}:${seconds}`;
}

console.log(`Today is ${getTodayDay()}`);
console.log(`Current time is ${getCurrentTime()}`);
