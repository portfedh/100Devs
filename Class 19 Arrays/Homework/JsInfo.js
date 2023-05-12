// https://javascript.info/array-methods


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


/*
Task 6: Create an extendable calculator

Implement the method calculate(str)
Takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result.
Should understand plus + and minus -.

let calc = new Calculator;
alert( calc.calculate("3 + 7") ); // 10
*/

console.log('Task 6: Create an extendable calculator');

function Calculator() {

    this.calculate = function(text){
        let splitString = text.split(' ')
        console.log(splitString)

        let number1 = parseInt(splitString[0])
        let symbol = splitString[1]
        let number2 = parseInt(splitString[2])

        if (symbol == '+'){
            console.log(number1 + number2)
        } else if (symbol == '-'){
            console.log(number1 - number2)
        }
    };
}

let calc = new Calculator;
calc.calculate("3 + 7");


/*
Task 7: Map to names

You have an array of user objects, each one has user.name.
Write the code that converts it into an array of names.

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];
let names = ... your code

//alert( names ); // John, Pete, Mary
*/

console.log('Task 7: Map to names');

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];
let names = []

for (i=0; i<users.length; i++){
    names.push(users[i].name);
}
console.log(names);


/*
Task 8: Map to objects

You have an array of user objects, each one has name, surname and id.

Write the code to create another array from it, of objects with
id and fullName,
where fullName is generated from name and surname.
*/

console.log('Task 8: Map to objects');

john = { name: "John", surname: "Smith", id: 1 };
pete = { name: "Pete", surname: "Hunt", id: 2 };
mary = { name: "Mary", surname: "Key", id: 3 };
users = [ john, pete, mary ];

let usersMapped = [];
for(i=0; i<users.length; i++) {
    let person = {};
    Object.assign(person, { name: `${users[i].name}  ${users[i].surname}`, id: `${users[i].id}` });
    usersMapped.push(person);
};
console.log(usersMapped);


/*
Task 9: Sort users by age
Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.
*/
console.log('Task 9: Sort users by age')

john = { name: "John", age: 25 };
pete = { name: "Pete", age: 30 };
mary = { name: "Mary", age: 28 };
arr = [ pete, john, mary ];

function sortByAge(users) {
    return users.sort((a, b) => a.age - b.age);
  }

  const sortedArr = sortByAge(arr);

  console.log(sortedArr);


/*
Task 10: Shuffle an array

Write the function shuffle(array) that randomly reorders elements of the array.
Multiple runs of shuffle may lead to different orders of elements.

*/
console.log('Task 10: Shuffle an array')

// Original array
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Random number function
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function shuffle(array){
    // Copy original array
    let originalArray = [...array]
    // Create new array with shuffled positions
    let shuffledArray = []

    while(originalArray.length > 0){
        // Get a random index number to remove from the original array
        indexNumber = getRandomInt(originalArray.length)
        // Remove that value
        arrayValue = originalArray.splice(indexNumber,1)
        // Add that value to the Shuffled array
        shuffledArray.push(arrayValue[0])
    }
    console.log('Shuffled Array: '+ shuffledArray)
}

// Testing
shuffle(arr);
shuffle(arr);
shuffle(arr);
shuffle(arr);
shuffle(arr);



/*
Task 11: Get average age

Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.
The formula for the average is (age1 + age2 + ... + ageN) / N.

*/
john = { name: "John", age: 25 };
pete = { name: "Pete", age: 30 };
mary = { name: "Mary", age: 29 };
arr = [ john, pete, mary ];

console.log('Task 11: Get average age')

function getAverageAge(users) {

    let ageSum = 0
    let arrayLength = users.length

    for(i=0; i < users.length; i++){
        ageSum += users[i].age
    }

    let averageAge = ageSum / arrayLength
    console.log('Sum of ages: ' + ageSum)
    console.log('Array length: ' + arrayLength)
    console.log('Average age: ' + averageAge)
    return averageAge
}

getAverageAge(arr)

/*
Task 12: Create keyed object from array

Let’s say we received an array of users in the form {id:..., name:..., age:... }.
Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

*/

users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  
//   let usersById = groupById(users);
  
  /*
  // after the call we should have:
  
  usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
  }
  */

  console.log('Task 12: Create keyed object from array')

  // Answer using literal notation
  // =============================

  // Print original Array
  console.log(users)

  // Create an object
  let myObject = {}

  // Run a for loop
  for(i=0; i < users.length; i++){
    myObject[users[i].name] = users[i]
  }

  // Print new object
  console.log(myObject)
