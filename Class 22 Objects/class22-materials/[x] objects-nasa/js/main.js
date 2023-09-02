//The user will enter a date. 
// Use that date to get the NASA picture of the day 
// From that date! https://api.nasa.gov/

// Listen to button click
document.querySelector('#submitButton').addEventListener('click', getFetch)
// Execute function
function getFetch(){
    // Use API key
    const apiKey = 'api_key=Z6IURhTGf1nBVsaGzfMmxfYeW3nNlr3gXin06TlK';
    // Read desired date
    const choice = document.querySelector('#submitDate').value
    const date = 'date='+String(choice)+'&'
    // Construct API query
    const url = 'https://api.nasa.gov/planetary/apod'+'?'+ date + apiKey;
    console.log(url)
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        // Check if its video or image
        if(data.media_type == 'video'){
            // Delete any previous images
            document.querySelector('#nasaImage').style.display = 'none';
            document.querySelector('#nasaVideo').style.display = 'block';
            // Write video in DOM
            document.querySelector('#nasaVideo').setAttribute("src", data.url);
        } else if(data.media_type == 'image') {
            // Delete any previous videos
            document.querySelector('#nasaVideo').style.display = 'none';
            document.querySelector('#nasaImage').style.display = 'block';
            // Write image in DOM
            document.querySelector('#nasaImage').setAttribute("src", data.url);
        }
        // Write description in DOM
        document.querySelector('#nasaDescription').innerText = data.explanation;
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}