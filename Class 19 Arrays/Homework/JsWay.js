
// Sum of values
const values = [3, 11, 7, 2, 9, 10];
let sumValues = 0;
for (let i=0; i < values.length; i++) {
    sumValues = sumValues + values[i]
}
console.log(sumValues);

// Maximum elements
let maxValue = 0;
for (let i=0; i < values.length; i++) {
    if (values[i] > maxValue) {
        maxValue = values[i];
    }
}
console.log(maxValue);

// List of words
let words = [];
let word;
while ( word != "stop") {
    word = prompt("What word should we add?");
    words.push(word)
}
console.log(words);
