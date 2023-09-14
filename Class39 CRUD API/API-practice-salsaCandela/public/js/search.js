console.log("Search Client Js Script running");

const form = document.getElementById("search-form");

form.addEventListener("submit", validateInput);

function validateInput() {
  const username = document.getElementById("id_search").value;
  const usernameError = document.getElementById("usernameError");
  if (username.length != 24) {
    console.log(`input length is not 24 char. Its: ${username.length}`);
    usernameError.textContent = "Username must be 24 characters.";
    event.preventDefault();
  }
}
