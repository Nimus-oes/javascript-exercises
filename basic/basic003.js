/* 
Basic 003. Get the current date in the following format:
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

const dateObj = new Date();
const year = dateObj.getFullYear();
let month = dateObj.getMonth() + 1; // getMonth() values are zero-based
let date = dateObj.getDate();

// Add 0 in front if values are less than 10
month = month < 10 ? "0" + month : month;
date = date < 10 ? "0" + date : date;

function formatDate(element1, element2, element3, separator) {
  return `${element1}${separator}${element2}${separator}${element3}`;
}

// mm-dd-yyyy
console.log(formatDate(month, date, year, "-"));

// mm/dd/yyyy
console.log(formatDate(month, date, year, "/"));

// dd-mm-yyyy
console.log(formatDate(date, month, year, "-"));

// dd/mm/yyyy
console.log(formatDate(date, month, year, "/"));
