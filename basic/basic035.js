/* 
Basic 035. Transform a provided numerical value representing minutes into hours and minutes.  
*/

function convertMinsToHours(mins) {
  const hours = Math.floor(mins / 60);
  const minutes = mins % 60;
  return `${hours}:${minutes}`;
}

console.log(convertMinsToHours(1441));
