
// Listen for click
document.querySelector('#submit-button').addEventListener('click', readForm)

// Calculate yesterdays date
let today = new Date();
let yesterday = new Date(today);
yesterday.setDate(today.getDate() - 1);
var yyyy = yesterday.getFullYear();
var mm = String(yesterday.getMonth() + 1).padStart(2, '0');
var dd = String(yesterday.getDate()).padStart(2, '0');
var formattedDate = yyyy + '-' + mm + '-' + dd;
console.log(formattedDate);


function readForm(){
  // Accessing the objects
  let searchObj = document.getElementById("searchSubject");
  // Getting the values from the form elements
  let search = searchObj.value;
  // Displaying the values
  console.log("Searching for: " + search);
  // Create the url
  let apiUrl = 'https://newsapi.org/v2/everything?' +
            'q=' +
            search +
            '&' +
            'from=' +
            formattedDate +
            '&' +
            'sortBy=popularity&' +
            'apiKey=6320f961210745a9bf655842d076b524';
  console.log("URL is: " + apiUrl);


  var req = new Request(apiUrl);

  fetch(req)
      .then(function(response) {
          console.log(response.json());
      })


//   // Paste the link in the image tag in DOM
//   document.querySelector('#qr-heading').innerText = 'QR Code';
//   document.querySelector('#qr-image').setAttribute("src", apiUrl);
//   document.querySelector('#qr-image').setAttribute("alt", "qrtag");
}








