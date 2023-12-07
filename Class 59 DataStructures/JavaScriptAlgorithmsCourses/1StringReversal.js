// Given a string of text, write an algorithm that returns the text received in a reversed format.

// Example:
// reverseString('algorithms') --> 'smhtirogla'

// Four solving approaches
// =======================
// Built-in methods
// Using a for-loop
// Recursion Method
// Using .reduce()

// 1. Built-in methods
function reverseString1(text) {
  return text.split("").reverse().join("");
  // This is equivalent, but using spread operator:
  // return [...text].reverse().join("");
}

// 2. Using a for-loop
function reverseString2(text) {
  let result = "";
  for (let i = text.length - 1; i >= 0; i--) {
    result += text[i];
  }
  return result;
}

// 3. Recursive
function reverseString3(text) {
  if (text === "") {
    return "";
  } else {
    return reverseString3(text.substring(1)) + text[0];
  }
}

// 4. Reduce
function reverseString4(text) {
  return text.split("").reduce((acc, char) => char + acc, "");
}

// console.log(reverseString4("Pablo"));

// The fastest solution we have considered is using the .reduce() method.
// Next, is the for-loop method which is only 6% slower and is a pretty close one.
// The slowest of them all is the method of chaining .split(), .reduce() and .join(59% slower)
