// Setup
let display = ''

// Controller Behaviors
function addNumber(number) {
  console.log( `You pressed the + button.`);
  calculator.add(Number(number))
  console.log(calculator)
  document.querySelector('#displayResults').innerText = x;
}