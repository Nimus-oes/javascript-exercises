/* 
Basic 011. Get the filename extension.
*/

const exampleFilename = "memo.txt";

function getExtension(filename) {
  return filename.split(".").pop();
}

function getFileName(filename) {
  return filename.split(".").shift();
}

console.log(getExtension(exampleFilename));
