/*
Basic 075. 
Convert a string into a palindrome.
*/

function createPalindrome(string) {
  let palindrome = string;
  for (let i = string.length - 2; i >= 0; i--) {
    palindrome += string.slice(i, i + 1);
  }

  return palindrome;
}

console.log(createPalindrome("abcabc"));
