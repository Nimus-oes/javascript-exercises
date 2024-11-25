/*
Basic 006. Find out if 1st January will be a Sunday between 2014 and 2050.
*/

// 1. The hard coded way
for (i = 2014; i <= 2050; i++) {
  const dateObj = new Date(i, 0, 1);
  if (dateObj.getDay() == 0) {
    console.log(`${i} January 1st is a Sunday`);
  }
}

// 2. More functional way

// function getDatesObj(month, day, startyear, endyear) {
//   const objArray = [];
//   for (i = startyear; i <= endyear; i++) {
//     const dateObj = new Date(i, month - 1, day);
//     objArray.push(dateObj);
//   }
//   return objArray;
// }

// datesArray = getDatesObj(1, 1, 2014, 2050);
// for (const date of datesArray) {
//   const day = date.getDay();
//   if (day == 0) {
//     console.log(`${date.getFullYear()} January 1st is a Sunday`);
//   }
// }
