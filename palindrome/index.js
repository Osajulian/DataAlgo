// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  const reversed = str
    .split('')
    .reverse()
    .join('');

  return str === reversed;
}

module.exports = palindrome;

// This second solution is not a great solution because the every method does double
// comparism - comparing characters from one end to characters
// on the other end and then repeating the process from the other
// end of the string.

// function palindrome(str) {
//     return str.split('').every((char, i) => {
//       return char === str[str.length - i - 1];
//     });
//   }
