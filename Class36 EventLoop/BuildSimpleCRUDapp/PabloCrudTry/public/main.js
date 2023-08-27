// Greeting
console.log("publiv/main.js in now running.")

// Listen for DarthVader Update click:
const update = document.querySelector('#update-button')
// Area to write message if Darth Vader quote is not here:
const messageDiv = document.querySelector('#message')
// Listen for Delete click:
const deleteButton = document.querySelector('#delete-button')

// PUT REQUEST using JavaScript:
// =============================
// (You can also create them with form elements)
// Underscore _ is often used as a placeholder for an argument that is not going to be used in the function.
// fetch is making an http request to the '/quotes' endpoint.
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

// DELETE REQUEST:
// ===============
// Underscore _ is often used as a placeholder for an argument that is not going to be used in the function.
// fetch is making an http request to the '/quotes' endpoint.
deleteButton.addEventListener('click', _ => {
  fetch('/quotes', {
    // Tells server its sending a PUT request:
    method: 'delete',
    // Tells server its sending JSON data:
    headers: { 'Content-Type': 'application/json' },
    // Convert data we are sending to JSON
    body: JSON.stringify({
      name: 'Darth Vader'
    })
  })
    .then(res => {
      // Transform the response to JSON
      if (res.ok) return res.json()
    })
    .then(response => {
      if (response === 'No quote to delete') {
        // Alert user there is no quote
        messageDiv.textContent = 'No Darth Vader quote to delete'
      } else {
        // Refresh the browser to see the changes
        window.location.reload(true)
        // In a more complicated app you would use Js to update the DOM
        // Without a reload.
      }
    })
    .catch(console.error)
})
