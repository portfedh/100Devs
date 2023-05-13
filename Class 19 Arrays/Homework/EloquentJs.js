// https://eloquentjavascript.net/04_data.html


/*
Task 1: The sum of a range

Write a range function that takes two arguments, start and end, 
and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers.
*/

function rangeArray(startNumber, endNumber, step=1){
    if (step >= 0) {
        myArray = []
        for(i=startNumber; i<=endNumber; i += step){
            myArray.push(i)
        }
        return myArray
    } else {
        myArray = []
        for(i=startNumber; i>=endNumber; i += step){
            myArray.push(i)
        }
        return myArray
    }
}

function sumArray(array){
    subTotal = 0
    for(i=0; i<array.length; i++){
        subTotal += array[i]
    }
    return subTotal
}

theArray = rangeArray(1, 10, 2);
console.log(theArray);

sumTotal = sumArray(theArray)
console.log(sumTotal);

theArray = rangeArray(5, 2, -1);
console.log(theArray);

sumTotal = sumArray(theArray)
console.log(sumTotal);