// Create a function that grabs the number of snacks from the input 
// and tells you to stop that many times
// ***************************************************************

// Check for clicks:
// Not in a function so it runs continuously
document.querySelector('#help').addEventListener('click', stopSnacking)

function checkSnacks(){
    // Get value from input tab
    let numberOfSnacks = document.querySelector('#inputForm').value
    numberOfSnacks = Number(numberOfSnacks)
    console.log(numberOfSnacks)
    return numberOfSnacks
}

function writeStop(times){
    // Write message to the DOM a specific number of times
    let message = 'Stop! \n'
    message =  message.repeat(times)
    document.querySelector('#stops').innerText = message;
}

function stopSnacking(){
    // Check the number of snacks &  tell user to stop that number of times
    snacks = checkSnacks();
    writeStop(snacks);
}