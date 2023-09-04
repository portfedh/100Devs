console.log('Js Script running')

// JavaScript code to prevent form submission
// ******************************************
document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault();
  console.log('Form submitted in testing/development mode. Data was not sent to the server.')
});


// Create QR
// *********
let newUuid = crypto.randomUUID()
console.log(`new UUID is: ${newUuid}`)
// Move this code Server side
// Add a timestamp