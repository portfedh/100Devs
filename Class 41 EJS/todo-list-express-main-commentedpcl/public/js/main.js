// Select all elements with the class "fa-trash" and store them in the deleteBtn variable
const deleteBtn = document.querySelectorAll(".fa-trash");

// Select all elements with the class "item span" and store them in the item variable
const item = document.querySelectorAll(".item span");

// Select all elements with the class "item span.completed" and store them in the itemCompleted variable
const itemCompleted = document.querySelectorAll(".item span.completed");

// Iterate over each element in the deleteBtn list.
Array.from(deleteBtn).forEach((element) => {
  // Add a click event listener to each delete button element
  // which calls the deleteItem function when clicked
  element.addEventListener("click", deleteItem);
});

// Iterate over each element in the item list.
Array.from(item).forEach((element) => {
  // Add a click event listener to each item button
  // which calls the markComplete function when clicked
  element.addEventListener("click", markComplete);
});

// Iterate over each element in the itemCompleted list.
Array.from(itemCompleted).forEach((element) => {
  // Add a click event listener to each itemCompleted button
  // which calls the markUnComplete function when clicked
  element.addEventListener("click", markUnComplete);
});

// This asynchronous function deletes an item when the delete button is clicked
async function deleteItem() {
  // Get the text content of the item (todo) to be deleted
  // Get the text content of the item (todo) to be marked as uncompleted
  // this: element that was clicked
  // parentNode: list element <li>
  // childNodes[1]: Second child node. First is the marker, second is the text.
  // innerText: Text content
  const itemText = this.parentNode.childNodes[1].innerText;
  try {
    // Send http request.
    // Save store result in 'response' variable
    // Use 'deleteItem' route
    const response = await fetch("deleteItem", {
      // Use a DELETE request
      method: "delete",
      // Sets the request headers
      // Specifies the request will be in json format
      headers: { "Content-Type": "application/json" },
      // Converts a Js Object into a JSON string
      body: JSON.stringify({
        itemFromJS: itemText,
      }),
    });
    // Parse the JSON response from the server
    // Wait for network response to finish before moving to next line of code
    const data = await response.json();
    // Log the response data
    console.log(data);
    // Refresh the page to reflect the updated todo list
    location.reload();
  } catch (err) {
    // Handle any errors that occur during the fetch or processing
    console.log(err);
  }
}

// This asynchronous function marks an item as complete when it is clicked
async function markComplete() {
  // Get the text content of the item (todo) to be marked as complete
  const itemText = this.parentNode.childNodes[1].innerText;
  // Get the text content of the item (todo) to be marked as uncompleted
  // this: element that was clicked
  // parentNode: list element <li>
  // childNodes[1]: Second child node. First is the marker, second is the text.
  // innerText: Text content
  try {
    // Send http request.
    // Save store result in 'response' variable
    // Use 'markComplete' route
    const response = await fetch("markComplete", {
      // Use a PUT request
      method: "put",
      // Sets the request headers
      // Specifies the request will be in json format
      headers: { "Content-Type": "application/json" },
      // Converts a Js Object into a JSON string
      body: JSON.stringify({
        itemFromJS: itemText,
      }),
    });
    // Parse the JSON response from the server
    const data = await response.json();
    // Log the response data
    console.log(data);
    // Refresh the page to reflect the updated todo list
    location.reload();
  } catch (err) {
    // Handle any errors that occur during the fetch or processing
    console.log(err);
  }
}

// This asynchronous function marks an item as uncompleted when it is clicked
async function markUnComplete() {
  // Get the text content of the item (todo) to be marked as uncompleted
  // this: element that was clicked
  // parentNode: list element <li>
  // childNodes[1]: Second child node. First is the marker, second is the text.
  // innerText: Text content
  const itemText = this.parentNode.childNodes[1].innerText;
  try {
    // Send http request.
    // Save store result in 'response' variable
    // Use 'markUnComplete' route
    const response = await fetch("markUnComplete", {
      // Use a PUT request
      method: "put",
      // Sets the request headers
      // Specifies the request will be in json format
      headers: { "Content-Type": "application/json" },
      // Converts a Js Object into a JSON string
      body: JSON.stringify({
        itemFromJS: itemText,
      }),
    });
    // Parse the JSON response from the server
    const data = await response.json();
    // Log the response data
    console.log(data);
    // Refresh the page to reflect the updated todo list
    location.reload();
  } catch (err) {
    // Handle any errors that occur during the fetch or processing
    console.log(err);
  }
}
