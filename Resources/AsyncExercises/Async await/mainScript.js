// Async / Await
// *************
// https://javascript.info/async-await

// Special syntax to work with promises more comfortably. 

async function f() {
  return 1;
}

f().then(alert); // 1


// works only inside async functions
let value = await promise


async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });
  let result = await promise; // wait until the promise resolves (*)
  alert(result); // "done!"
  
  await Promise.reject(new Error("Whoops!"));
}
f();

// The function execution “pauses” at the line (*) 
// It  resumes when the promise settles, with result becoming its result. 
// So the code above shows “done!” in one second.
// We’ll need to replace .then calls with await.

// Example:
// *******
async function showAvatar() {

  // read our JSON
  let response = await fetch('/article/promise-chaining/user.json');
  let user = await response.json();

  // read github user
  let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
  let githubUser = await githubResponse.json();

  // show the avatar
  let img = document.createElement('img');
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);

  // wait 3 seconds
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));

  img.remove();

  return githubUser;
}

showAvatar();