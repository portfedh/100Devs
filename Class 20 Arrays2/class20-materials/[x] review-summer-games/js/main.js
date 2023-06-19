//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 

function multiplyMe(array){
    let product = 1;
    for (i=0; i < array.length; i++) {
        product = product * array[i]
    }
    alert(product)
}

multiplyMe([2, 3, 4, 5])


// Same function but with for each
function multiplyMe2(array){
    let product = 1;
    array.forEach( number => product *= number)
    alert(product)
}

multiplyMe2([2, 3, 4, 5])