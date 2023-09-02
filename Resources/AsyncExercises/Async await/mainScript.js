// Async / Await
// *************

// https://www.youtube.com/watch?v=vn3tm0quoqE

// Fireship


// The event loop:

//     The browser & node JS run a single threaded event loop.

//     First round

//         Runs all synchronous code

//         It ques up asynchronous events to be called back later

//         When asynchonous events finish, it lets the event loop know its ready to be called back.

//             Micro-tasks will be executed before the start of the next event loop. 

//             Macro-tasks will be executed in the next event loop. 


    // Example:

        // L1
        console.log('Sync 1')

        // L2 (macro-task)
        setTimeout(_ => console.log('Timeout2'), 0)

        // L3 (micro-task)
        Promise.resolve().then(_ => console.log('Promise3'))

        // L4
        console.log('Sync 4')

        // Responses:
        // Sync1 -> Sync4 -> Promise3 -> Timeout2






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


// The event loop
// **************

//     The browser & node JS run a single threaded event loop.

//     First round
//         Runs all synchronous code

//         It ques up asynchronous events to be called back later

//         When asynchonous events finish, it lets the event loop know its ready to be called back.

//             Micro-tasks will be executed before the start of the next event loop. 


//             Macro-tasks will be executed in the next event loop. 


    // Example:

        // L1
        console.log('Sync 1')

        // L2 (macro-task)
        setTimeout(_ => console.log('Timeout2'), 0)

        // L3 (micro-task)
        Promise.resolve().then(_ => console.log('Promise3'))

        // L4
        console.log('Sync 4')

        // Responses:
        // Sync1 -> Sync4 -> Promise3 -> Timeout2


// Promises:

//     You can catch any errors in the chain with a single function. 

// Async await:

//     Syntactical sugar to make async code look like synchronous code.

//     Error handling: try { } catch(err) { }