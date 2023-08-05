// There are several ways to run asynchronous code

// The oldest one is called a callback, which is explained below. 

// First try
// **********

  function loadScript(src) {
    // Creates a script tag and appends it to the page: <script src="…">
    let script = document.createElement('script');
    // Adds src="…"
    script.src = src;
    // Adds line to the DOM
    document.head.append(script);
  }

  // Running the function:
  // console.log('Running first try:')
  // loadScript('secondScript.js');
  // Console log this from mainScript: 
  // console.log('Main script has loaded')

  // Output:
  // 'Main script has loaded' will run before text in second scrip. 
  // SecondScript takes time to load and JavaScript does not wait. 
  // If you need code from second script it will not find it. 


// Second Try: Adding a callback
// ********************************

// Add a second parameter
function loadScript2(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  // Executes function after script is loaded
  script.onload = () => callback(script);
  document.head.append(script);
}

// Running the function with two scripts:
// **************************************
// console.log('Running second try:')
// loadScript2('secondScript.js', function(script) {
//   console.log(`Confirmation: Second Script has loaded.`);

//   loadScript2('thirdScript.js', function(script) {
//     console.log(`Confirmation: Second Script has loaded.`);
//   });
// });



// Third try: Handling errors
// **************************
// Add a second parameter
function loadScript3(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  // Executes function after script is loaded
  script.onload = () => callback(script);
  // Handles errors
  script.onerror = () => callback(new Error(`Script load error for ${src}`));
  document.head.append(script);
}


// Running the function with error handling:
// *****************************************
console.log('Running third try:')
loadScript3('secondScript.js', function(error, script) {
  if (error){
    console.log(`Error detected.`);
  } else{
    console.log(`Confirmation: Second Script has loaded.`);
    loadScript3('thirdScript.js', function(error, script) {
      if(error){
        console.log(`Error detected.`);
      } else{
        console.log(`Confirmation: Second Script has loaded.`);
      }
    });
  }
});

// This is very hard to understand.
// Thats why they called it the pyramid of doom.
// Could not get it to work properly even with the simplest example. 
// To solve it you break down into separate functions with callbacks.
// It works but there is a better way. 

// loadScript('1.js', step1);

function step1(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript('2.js', step2);
  }
}

function step2(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript('3.js', step3);
  }
}

function step3(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...continue after all scripts are loaded (*)
  }
}