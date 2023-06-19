// Create a function that takes in an array. 
// If the first number, is less than the last number, alert "Hi". 
// If the first number is greater than the last number, alert "Bye". 
// If they are equal, alert "We close in an hour".

function checkArray(array) {
    let firstNumber = array[0];
    let lastNumber = array[array.length -1];
    alert(firstNumber)
    alert(lastNumber)


    if (firstNumber < lastNumber) {
        alert('Hi');
    } else if (firstNumber > lastNumber) {
        alert('Bye');
    } else if (firstNumber == lastNumber) {
        alert('We close in one hour');
    }
};

checkArray([23, 12, 45, 78]);