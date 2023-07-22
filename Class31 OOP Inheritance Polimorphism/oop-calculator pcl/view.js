// Inputs from DOM
// ***************

// Numbers & digits
document.querySelector('#num1').addEventListener('click', () => getNumber('1'))
document.querySelector('#num2').addEventListener('click', () => getNumber('2'))
document.querySelector('#num3').addEventListener('click', () => getNumber('3'))
document.querySelector('#num4').addEventListener('click', () => getNumber('4'))
document.querySelector('#num5').addEventListener('click', () => getNumber('5'))
document.querySelector('#num6').addEventListener('click', () => getNumber('6'))
document.querySelector('#num7').addEventListener('click', () => getNumber('7'))
document.querySelector('#num8').addEventListener('click', () => getNumber('8'))
document.querySelector('#num9').addEventListener('click', () => getNumber('9'))
document.querySelector('#num0').addEventListener('click', () => getNumber('0'))
document.querySelector('#numDot').addEventListener('click', () => getNumber('.'))

// Operation
document.querySelector('#numPlus').addEventListener('click', () => addNumber())
document.querySelector('#numMinus').addEventListener('click', () => subtractNumber())
document.querySelector('#numMultiply').addEventListener('click', () => operation('x'))
document.querySelector('#numDivide').addEventListener('click', () => operation('/'))
document.querySelector('#numEqual').addEventListener('click', () => operation('='))

// Display
document.querySelector('#numDel').addEventListener('click', () => deleteNumber())
document.querySelector('#numAc').addEventListener('click', () => deleteAll())


// Calculator Behaviors
// *********************

// Setup
let display = ''

// Display Behaviors
function getNumber(x) {
  console.log( `You pressed the ${x} button.`);
  if(x === '.' && display.includes('.')) { 
    return 
  }  else {
    display += x
    document.querySelector('#displayResults').innerText = display;
  }
  
}

function deleteNumber() {
  console.log( `You pressed the DEL button.`);
  display = display.slice(0, -1)
  document.querySelector('#displayResults').innerText = display;
}

function deleteAll() {
  console.log( `You pressed the AC button.`);
  display = ''
  document.querySelector('#displayResults').innerText = display;
}

// Controller Behaviors
function addNumber() {
  console.log( `You pressed the + button.`);
  calculator.add(Number(display))
  result = calculator.getResult()
  display = ''
  document.querySelector('#displayResults').innerText = result;
}

function subtractNumber() {
  console.log( `You pressed the - button.`);
  this.result = Number(display)
  display = ''
  
  calculator.subtract(Number(display))
  result = calculator.getResult()
  display = ''
  document.querySelector('#displayResults').innerText = result;
}