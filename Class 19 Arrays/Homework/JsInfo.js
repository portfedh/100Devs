/*
Task 1: camelCase

Write the function camelize(str)
Changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
P.S. Hint: use split to split the string into an array, transform it and join back.
camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
*/
console.log('Task 1: camelCase')
function camelize(str){
    let splitString = str.split('-')
    let capitalizedString = []
    let joinedString

    if (splitString[0] == "") {
        splitString.shift()
    };

    capitalizedString.push(splitString[0])
    for(i=1; i < splitString.length; i++){
        capitalizedString.push(splitString[i].charAt(0).toUpperCase()+splitString[i].slice(1))
    };
    joinedString = capitalizedString.join('')

    console.log(splitString)
    console.log(capitalizedString)
    console.log(joinedString)

    return joinedString
};
// Test
camelize('pablo-cruz-lemini');
camelize('juan-diego-pablo-cruz-lemini');
camelize("background-color");
camelize("list-style-image");
camelize("-webkit-transition");


/* 
Task 2: Filter Range

Write a function filterRange(arr, a, b) 
Looks for elements with values higher or equal to a and lower or equal to b
Return a result as an array.
The function should not modify the array. It should return the new array.
*/
console.log('Task 2: Filter Range');
function filterRange(arr, a, b){
    let filteredRange = []

    for(i=0; i < arr.length; i++){
        if(arr[i] >= a && arr[i] <= b) {
            filteredRange.push(arr[i])
        }
    }
    console.log(filteredRange)
}
// Test
let testArray = [5, 3, 8, 1];
filterRange(testArray, 1, 4);


/* 
Task 3: Filter Range "In place"

Write a function filterRangeInPlace(arr, a, b) 
Gets an array arr and removes all values except those that are between a and b. 
The test is: a ≤ arr[i] ≤ b.
The function should only modify the array. It should not return anything.
*/
console.log('Task 3: Filter Range "In place"');
function filterRangeInPlace(arr, a, b) {
    for(i=0; i < arr.length; i++){
        if( arr[i] < a || arr[i] > b){
            arr.splice(i, 1);
        }
    }
};
// Test
let myTestArray = [5, 3, 8, 1];
filterRangeInPlace(myTestArray, 1, 4);
console.log(myTestArray);


/* 
Task 4: Sort in decreasing order

let arr = [5, 2, 1, -10, 8];
// ... your code to sort it in decreasing order
alert( arr ); // 8, 5, 2, 1, -10
*/
console.log('Task 4: Sort in decreasing order');
let arr = [5, 2, 1, -10, 8];
console.log(arr)
arr.sort(
    // Compare function
    (a,b) => b - a
    );
console.log(arr);

/* 
Task 5: Copy and sort array

We have an array of strings arr. 
We’d like to have a sorted copy of it, but keep arr unmodified.

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)
*/
console.log('Task 5: Copy and sort array');
let arr5 = ["HTML", "JavaScript", "CSS"];

function copySorted(array){
    arrayCopy = array.slice();
    return arrayCopy.sort()
}
let sorted = copySorted(arr5);

console.log( arr5 )
console.log( sorted )