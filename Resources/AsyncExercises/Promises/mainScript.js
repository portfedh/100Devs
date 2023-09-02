// Promises
// ********
// https://javascript.info/promise-error-handling

// Constructor syntax
let promise = new Promise(function(resolve, reject) {

  // Executor: The code that you add and runs automatically.

  // Resolve & reject parameters are callbacks that have two properties

  // Result:
  //     resolve -> Success with result: <value>
  //     reject -> Failure with error: <error>
  //     A job done by the executor may have only one result.


  // State:
  //     "Pending": Initial state.
  //     "fulfilled": If resolved with success.
  //     "Rejected": If failed with error and rejected.

  // Microtasks:
  // .then
  // .catch
  // .finally
  // All run after the current code is complete
  // They are executed in order, as a que (FIFO)
});


// Example:
loadScript("one.js")
  .then(function(script) {
    return loadScript("two.js");
  })
  .then(function(script) {
    return loadScript("three.js");
  })
  .then(function(script) {
    // use functions declared in scripts
    // to show that they indeed loaded
    one();
    two();
    three();
  });

// Same code with arrow functions:
loadScript("one.js")
  .then(script => loadScript("two.js"))
  .then(script => loadScript("three.js"))
  .then(script => {
    // scripts are loaded, we can use functions declared there
    one();
    two();
    three();
  });

  // Error handling
  fetch('https://no-such-server.blabla') // rejects
    .then(response => response.json())
    .catch(err => alert(err)) // TypeError: failed to fetch (the text may vary)
    // On rejection the control jumps to the closest rejection handler
    // the .catch cant appear at the end, after several .then

// Some Promise static methods

//Promise All
// Execute many promises in parallel and wait until all are ready. 

// Promise AllSettled
// Rejects as a whole if any promise rejects

// Promise any
// Gets error only if all promises are rejects

