// Finding the Most Recurring Character
// Given a string of text, find and return the most recurring character.
// maxRecurringChar('aabacada') // will return 'a'

// Two solutions:
// ==============
// 1. Character mapping
// 2. Forming arrays

// 1. Character Mapping
function maxRecurringChar(text) {
  let charMap = {};
  let maxCharValue = 0;
  let maxChar = "";
  for (let char of text) {
    // Check if char has been mapped
    if (charMap.hasOwnProperty(char)) {
      // If yes, increment value
      charMap[char]++;
    } else {
      // If no, add and set value to 1
      charMap[char] = 1;
    }
  }
  for (let char in charMap) {
    if (charMap[char] > maxCharValue) {
      // Store maximum value
      maxCharValue = charMap[char];
      // Store character with maximum value
      maxChar = char;
    }
  }
  return maxChar;
}

// 2. Forming arrays
function maxRecurringChar2(text) {
  let charMap = {};
  let maxCharValue = 0;
  let maxChar = "";
  for (let char of text) {
    if (charMap.hasOwnProperty(char)) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  // Array of all the keys in charMap
  charArray = Object.keys(charMap);
  // Array of all the values in charMap
  vaulesArray = Object.values(charMap);
  // Find max value in valuesArray
  maxCharValue = Math.max(...vaulesArray);
  // Search for the index value the maxCharValue
  // Use that index to find the corresponding character
  return charArray[vaulesArray.indexOf(maxCharValue)];
}

console.log(maxRecurringChar("aabacada"));
console.log(maxRecurringChar2("aabacada"));

// The For…In iteration is the fastest.
// With the Arrays method trailing behind by approximately 30%.
