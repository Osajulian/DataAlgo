const word = 'HI    THERE!!!!!!';

// using the string replace, regExp and to Lowercase method we can turn this to 'hithere, removing,
// all white spaces, punctuations and return lower case

const newWord = word.replace(/[^\w]/g, '').toLowerCase();

console.log(newWord);
