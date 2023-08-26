// Greeting
console.log("publiv/main.js in now running.")

// Listen for DarthVader Update click:
const update = document.querySelector('#update-button')
// Area to write message if Darth Vader quote is not here:
const messageDiv = document.querySelector('#message')
// Listen for Delete click:
const deleteButton = document.querySelector('#delete-button')

// PUT Request using JavaScript:
// (You can also create them with form elements)
update.addEventListener('click', _ => {
  fetch('/quotes', {
    // Tells server its sending a PUT request:
    method: 'put',
    // Tells server its sending JSON data:
    headers: { 'Content-Type': 'application/json' },
    // Convert data we are sending to JSON
    body: JSON.stringify({
      name: 'Darth Vader',
      quote: 'I find your lack of faith disturbing.'
    })
  })
    .then(res => {
      // Transform the response to JSON
      if (res.ok) return res.json()
    })
    .then(response => {
      // Refresh the browser to see the changes
      window.location.reload(true)
      // In a more complicated app you would use Js to update the DOM
      // Without a reload.
    })
})



// Delete request

