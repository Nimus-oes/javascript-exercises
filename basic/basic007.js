/*
Basic 007. Calculate the days left before Christmas.
*/

// 1. Get difference between two date objects (today and Christmas) in milliseconds
// 2. Divide the difference by a day in milliseconds
// 3. Add one more day if there is remainder
// 4. If Christmas has already passed, calculate the days left to the next Christmas

const today = new Date();

function getXmas() {
  const thisYear = today.getFullYear();
  const thisMonth = today.getMonth();
  const thisDate = today.getDate();
  const xmasYear = thisMonth == 11 && thisDate > 25 ? thisYear + 1 : thisYear;
  return new Date(xmasYear, 11, 25);
}

function getDDay() {
  const diff = getXmas() - today;
  const dayInMS = 1000 * 60 * 60 * 24;
  const ddays = Math.ceil(diff / dayInMS);
  return `D-${ddays}`;
}

console.log(getDDay());

// A more generic d-day calculator will look like this:
// function getDDay(year, month, day) {
//   const target = new Date(year, month - 1, day);
//   const today = new Date();
//   const dayInMS = 1000 * 60 * 60 * 24;
//   const diff = target - today;
//   const dDays = Math.ceil(diff / dayInMS);

//   return dDays > 0 ? `D-${dDays}` : `D+${-dDays}`;
// }

// console.log(getDDay(2024, 12, 25));
