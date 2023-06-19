//Create a function that takes in an array of numbers.
// Return a new array containing every even number from the original array (do not use map or filter)


function evenNumber(array){
    let newArray = [];

    for (i=0; i < array.length; i++)
        if (array[i] % 2 == 0) {
            newArray.push(array[i])
        }
    
    console.log(newArray)
    return newArray;
};

evenNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
