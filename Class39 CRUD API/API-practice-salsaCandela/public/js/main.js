console.log('Js Script running')

// JavaScript code to prevent form submission
// ******************************************
// document.getElementById('signup-form').addEventListener('submit', function(event) {
//   event.preventDefault();
//   console.log('Form submitted in testing/development mode. Data was not sent to the server.')
// });


// Create QR
// *********
let newUuid = crypto.randomUUID()
console.log(`new UUID is: ${newUuid}`)
// Move this code Server side
// Add a timestamp

// Download QR
// ***********
document.getElementById('capture-button').addEventListener('click', function () {
  console.log('clicked button')
  // html2canvas(document.getElementById('imagen-qr-confirmacion')).then(function (canvas) {
  //   var image = canvas.toDataURL('image/png'); // Convert canvas to base64 image data
    
  //   // Create a link element to download the image
  //   var a = document.createElement('a');
  //   a.href = image;
  //   a.download = 'captured-image.png'; // Set the filename for the downloaded image
  //   a.click(); // Trigger a click event to start the download
  // });
  
});