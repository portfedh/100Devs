// https://eloquentjavascript.net/04_data.html

/*
Task 1: The sum of a range

Write a range function that takes two arguments, start and end, 
and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers.
*/
console.log("Task 1: The sum of a range");

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

/*
Task 2: Reversing an array

 For this exercise, write two functions, reverseArray and reverseArrayInPlace. 
 The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. 
 
 The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements.
 Neither may use the standard reverse method.

 console.log(reverseArray(["A", "B", "C"]));
 // → ["C", "B", "A"];

*/
console.log("Task 2: Reversing an array");

function reverseArray(array){
    
    tempArray = [...array]
    outputArray = [];

    for(i=0; i < array.length; i++){
        x = tempArray.pop()
        outputArray.push(x)
    }

    console.log(outputArray)
}


myArray = ["A", "B", "C"]
console.log(myArray)
reverseArray(myArray)

// Reversing an array in place
// Modify the array given as argument by reversing its elements. 
console.log('Task 2: Reversing an array in place')

function reverseArrayInPlace(array){
    let start = 0;
    let end = array.length - 1;
    while (start < end) {
      // Swap elements
      let temp = array[start];
      array[start] = array[end];
      array[end] = temp;
      // Move the pointers
      start++;
      end--;
    }
    return array;
  }

myArray3 = ["A", "B", "C"]
// ["C", "B", "A"]
myArray4 = ["A", "B", "C", "D"]
// ["D", "C", "B", "A"]

console.log(myArray3)
console.log(reverseArrayInPlace(myArray3))

