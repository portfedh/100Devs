// Setup
let total = 0
let symbol = ''
console.log('total = ' + total)
console.log('symbol = ' + symbol)

// Addition & Subtraction
document.querySelector('#numPlus').addEventListener('click', add)
document.querySelector('#numMinus').addEventListener('click', sub)

// Numbers
document.querySelector('#num1').addEventListener('click', function() {num(1);})
document.querySelector('#num2').addEventListener('click', function() {num(2);})
document.querySelector('#num3').addEventListener('click', function() {num(3);})
document.querySelector('#num4').addEventListener('click', function() {num(4);})
document.querySelector('#num5').addEventListener('click', function() {num(5);})
document.querySelector('#num6').addEventListener('click', function() {num(6);})
document.querySelector('#num7').addEventListener('click', function() {num(7);})
document.querySelector('#num8').addEventListener('click', function() {num(8);})
document.querySelector('#num9').addEventListener('click', function() {num(9);})

// Function to add or subtract
function num(x) {
  if (symbol === '+') {
    total += x;
    console.log('total = ' + total);
    console.log('symbol = ' + symbol)
    document.querySelector('#displayResults').innerHTML = total
  } else if (symbol === '-') {
    total -= x;
    console.log('total = ' + total);
    console.log('symbol = ' + symbol)
    document.querySelector('#displayResults').innerHTML = total
  } else {
    console.log('No symbol attached');
  }

}

function add() {
  symbol = '+';
  console.log( 'Symbol is now +');
  console.log(symbol);
}

function sub() {
  symbol = '-';
  console.log( 'Symbol is now -');
  console.log(symbol);
}
