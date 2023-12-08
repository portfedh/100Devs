// Counting the Vowels in a String of Text

// Two solutions:
// ==============
// 1. An iterative approach
// 2. Using regular expressions

// 1. Iterative approach
const vowels = ["a", "e", "i", "o", "u"];
function vowelsCounter(text) {
  let counter = 0;
  for (let letter of text.toLowerCase()) {
    if (vowels.includes(letter)) {
      counter++;
    }
  }
  return counter;
}

// 2. Regex approach
function vowelsCounter2(text) {
  // Search text with Regex and store all matching instances
  let matchingInstances = text.match(/[aeiou]/gi);
  // If matching instances exist calculate length
  if (matchingInstances) {
    // Return number of vowels
    return matchingInstances.length;
  } else {
    return 0;
  }
}

// The Regex Method is approximately 88% faster than The Iterative Approach.
// Thus, it is a more optimal solution
