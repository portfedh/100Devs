// Selecting  all elements with:
// *****************************

//  Delete class:
const deleteBtn = document.querySelectorAll(".del");
// Span elements with class 'not'
const todoItem = document.querySelectorAll("span.not");
// Span elements with class 'completed'
const todoComplete = document.querySelectorAll("span.completed");

// Event listeners:
// ****************

// For every element with delete class, if clicked call 'delete' function
Array.from(deleteBtn).forEach((el) => {
  el.addEventListener("click", deleteTodo);
});

// For every non completed element, if clicked call 'markComplete' function
Array.from(todoItem).forEach((el) => {
  el.addEventListener("click", markComplete);
});

// For every completed element, if clicked call 'markIncomplete' function
Array.from(todoComplete).forEach((el) => {
  el.addEventListener("click", markIncomplete);
});

// Functions:
// **********

async function deleteTodo() {
  // Get the id for the to-do item that will be deleted
  const todoId = this.parentNode.dataset.id;
  try {
    // Send an HTTP DELETE request to the 'todos/deleteTodo' endpoint on the server
    const response = await fetch("todos/deleteTodo", {
      method: "delete",
      // Specify that the request body contains JSON data.
      headers: { "Content-type": "application/json" },
      // Converts the 'todoId' into a JSON string and sends it as the request body
      body: JSON.stringify({
        todoIdFromJSFile: todoId,
      }),
    });
    const data = await response.json();
    // Logs the confirmation or error messages from the server.
    console.log(data);
    // Reloads the page to reflect the changes
    location.reload();
  } catch (err) {
    // Log any errors
    console.log(err);
  }
}

async function markComplete() {
  // Get the id for the to-do item that will be updated
  const todoId = this.parentNode.dataset.id;
  try {
    // Send an HTTP PUt request to the 'todos/markComplete' endpoint on the server
    const response = await fetch("todos/markComplete", {
      method: "put",
      // Specify that the request body contains JSON data.
      headers: { "Content-type": "application/json" },
      // Converts the 'todoId' into a JSON string and sends it as the request body
      body: JSON.stringify({
        todoIdFromJSFile: todoId,
      }),
    });
    const data = await response.json();
    // Logs the confirmation or error messages from the server.
    console.log(data);
    // Reloads the page to reflect the changes
    location.reload();
  } catch (err) {
    // Log any errors
    console.log(err);
  }
}

async function markIncomplete() {
  // Get the id for the to-do item that will be updated
  const todoId = this.parentNode.dataset.id;
  try {
    // Send an HTTP PUT request to the 'todos/markIncomplete' endpoint on the server
    const response = await fetch("todos/markIncomplete", {
      method: "put",
      // Specify that the request body contains JSON data.
      headers: { "Content-type": "application/json" },
      // Converts the 'todoId' into a JSON string and sends it as the request body
      body: JSON.stringify({
        todoIdFromJSFile: todoId,
      }),
    });
    const data = await response.json();
    // Logs the confirmation or error messages from the server.
    console.log(data);
    // Reloads the page to reflect the changes
    location.reload();
  } catch (err) {
    // Log any errors
    console.log(err);
  }
}
