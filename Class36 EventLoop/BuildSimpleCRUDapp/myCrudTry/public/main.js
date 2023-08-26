// Greeting
console.log("main.js from the Public folder running")


// Listen for DarthVader Click:
const update = document.querySelector('#update-button')

// Area to write message if Darth Vader quote is not here
const messageDiv = document.querySelector('#message')

update.addEventListener('click', _ => {
  // Send PUT Request here
  fetch('/quotes', {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        name: 'Darth Vader',
        quote: 'I find your lack of faith disturbing.',
    })
    .then(res => {
      if (res.ok) return res.json()
    })
    .then(response => {
      if (response === 'No quote to delete') {
        messageDiv.textContent = 'No Darth Vader quote to delete'
      } else {
        window.location.reload(true)
      }
    })
    })
  })



// Delete request

