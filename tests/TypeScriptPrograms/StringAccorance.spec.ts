let str: string ="Automation 123Jagadish";
let result= str.replace(/[0-9]/g, '').split(' ').map(word=>word.split('').reverse().join('')).join(' ');
console.log(result);

// [0-9] → Finds numbers from 0 to 9.
// g → Global flag, finds all numbers.
// '' → Replaces numbers with nothing.

// word.split('') → Converts the word into individual characters.
// reverse() → Reverses the characters.
// join('') → Combines the characters into a word.