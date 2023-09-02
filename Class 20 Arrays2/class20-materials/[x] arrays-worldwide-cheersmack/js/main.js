//Create a function that takes in a number. 
// The function should return an array that 
//contains every number from 1 to that number as seperate elements


function takeNumber(number){
    let myArray = []
    for(i = 1; i <= number; i++){
        myArray.push(i)
    }
    return myArray
}

console.log(takeNumber(15));