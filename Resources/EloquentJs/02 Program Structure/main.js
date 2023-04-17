// Program Structure

// Print Triangle:
// let x;
// let y = '#'
// for (x = 1; x <= 7; x++) {
//     console.log(y);
//     y = y + '#'
// }
// #
// ##
// ###
// ####
// #####
// ######
// #######


// Fizz Buzz Exercise:
// Print all numbers from 1 to 100
// Numbers divisible by 3 = 'Fizz'
// Numbers divisible by 5, not 3, = 'Buzz'
// Numbers divisible by 3 and 5 = 'FizzBuzz'
// let n;
// for (n = 1; n <= 100; n++) {
//     if ( n % 3 === 0 ) {
//         if ( n % 5 === 0 ) {
//             console.log('FizzBuz')
//         } else {
//             console.log('Fizz')
//         }
//     } else if ( n % 5 === 0) {
//         console.log('buzz')
//     } else {
//         console.log(n)
//     }
// }

// ChessBoard:
function printChessBoard(rows, columns){
    let x;
    for (x = 1; x <= columns; x++) {
        if (x % 2 == 0) {
            printRowEven(rows);
        } else {
            printRowOdd(rows);
        }
    };
}
function printRowOdd(n) {
    let x;
    let row = [];
    for (x = 1; x <= n; x++) {
        if (x % 2 == 0 ) {
            row = row + '#'
        } else {
            row = row + ' '
        } 
    };
    console.log(row);
}
function printRowEven(n) {
    let x;
    let row = [];
    for (x = 1; x <= n; x++) {
        if (x % 2 == 0 ) {
            row = row + ' '
        } else {
            row = row + '#'
        } 
    };
    console.log(row);
}
printChessBoard(20, 15)