// Task 1: camelCase
console.log('Task 1: camelCase')
// Write the function camelize(str)
// Changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
// P.S. Hint: use split to split the string into an array, transform it and join back.

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

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

camelize('pablo-cruz-lemini');
camelize('juan-diego-pablo-cruz-lemini');
camelize("background-color");
camelize("list-style-image");
camelize("-webkit-transition");

// Task 2: Filter Range
console.log('Task 2: Filter Range')
// Write a function filterRange(arr, a, b) 
// Looks for elements with values higher or equal to a and lower or equal to b
// Return a result as an array.
// The function should not modify the array. It should return the new array.

function filterRange(arr, a, b){
    let filteredRange = []

    for(i=0; i < arr.length; i++){
        if(arr[i] >= a && arr[i] <= b) {
            filteredRange.push(arr[i])
        }
    }
    console.log(filteredRange)
}

let testArray = [5, 3, 8, 1]

filterRange(testArray, 1, 4)