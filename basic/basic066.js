/*
Basic 066. Find the types of a given angle.   
Types of angles:
• Acute angle: An angle between 0 and 90 degrees.
• Right angle: An 90 degree angle.
• Obtuse angle: An angle between 90 and 180 degrees.
• Straight angle: A 180 degree angle.
*/

function getAngleType(value) {
  if (value >= 0 && value < 90) {
    return "Acute";
  } else if (value === 90) {
    return "Right";
  } else if (value > 90 && value < 180) {
    return "Obtuse";
  } else if (value === 180) {
    return "Straight";
  }
}

console.log(getAngleType(90));
