document.querySelector('#submit-button').addEventListener('click', readForm)

function readForm(){

  // Accessing the objects
  let urlObj = document.getElementById("url");
  let sizeObj = document.getElementById("size");
  let imgTypeObj = document.getElementById("image-type");
  let backgroundColorObj = document.getElementById("background-color");

  // Getting the values from the form elements
  let url = urlObj.value;
  let imgType = imgTypeObj.value;
  let backgroundColor = backgroundColorObj.value;
  if(backgroundColor !== ""){
    backgroundColor = backgroundColorObj.value+"_";
  }

  // Displaying the values
  console.log("Url: " + url);
  console.log("Image Type: " + imgType);
  console.log("Background color: " + backgroundColor);

  // Create the url
  let apiUrl = `https://qrtag.net/api/qr_${backgroundColor}8.${imgType}?url=https://${url}`;
  console.log("API Url: " + apiUrl);

  // Paste the link in the image tag in DOM
  document.querySelector('#qr-heading').innerText = 'QR Code';
  document.querySelector('#qr-image').setAttribute("src", apiUrl);
  document.querySelector('#qr-image').setAttribute("alt", "qrtag");
}

