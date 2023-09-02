//Create a function that has a loop that prints '21' 21 times to the console and then call that function
// *****************************************************************************************************

function sirSavage(){
    let output = "";
    for(i=0; i<21; i++){
        // console.log(21);
        output += "21 \n"
    };
    console.log(output)
    return output
}
sirSavage();

//Bonus can you make it print '21' 21 times to the dom?
// *****************************************************

// Execute function when clicked
document.querySelector('#mainImage').addEventListener('click', runFunction)

function runFunction(){
    // Run checkAge() and get value
    let outputText = sirSavage();
    console.log(outputText);

    // Write text to the DOM
    document.querySelector('#savageSays').innerText = outputText;
}
