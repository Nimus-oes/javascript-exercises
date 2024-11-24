/* 
Basic 004. Rotate the string 'w3resource' in the right direction. 
This is done by periodically removing one letter from the string end and attaching it to the front. 
*/

const source = "w3resource";
let text = source;

function rotateString(string) {
  text = text[text.length - 1] + text.slice(0, text.length - 1);
  console.log(text);
}

setInterval(() => {
  rotateString(source);
}, 1000);
