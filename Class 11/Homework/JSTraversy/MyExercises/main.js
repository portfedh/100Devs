// LOGGING OUTPUT
// alert('Hello World'); // Do not use for debugging. Stops script and only strings
console.log('Hello World');
console.error('This is an error');
console.warn('This is a warning');


// var si globally scoped
// let & const have a block level scope
// Const value cant be re-assigned
// Let value can be re-assigned
// Recomendation: Use const unless you know the value will change. 
let age = 30;
age = 31;


// Data types:
// Strings, numbers, boolean, null, undefined
const name = 'John';
const raiting = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof x);


// Concatenation: Method 1
console.log('My name is '+ name + ' and I am ' + age);

// Template String: Method 2
const hello = `My name is ${name} and I am ${age}`;
console.log(hello)

// Sting properties & methods

const s = 'Hello, World';
console.log(s.toUpperCase());
console.log(s.substring(0,5))
console.log(s.substring(0,5).toUpperCase())
console.log(s.split(','));

// Arrays
const fruits = ['apples', 'oranges', 'pears', 10, true];
console.log(fruits);
console.log(fruits[2]);
fruits.push('mangos');
fruits.push('plumbs');
fruits.unshift('strawberries');
fruits.pop()
console.log(fruits);
console.log(Array.isArray(fruits));


//Objects
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  hobbies: ['music', 'movies', 'sports']
}

console.log(person);
console.log(person.firstName);


const todos = [
  {
    id: 1,
    text: 'Take out trash',
    isCompleted: true
  },
  {
    id: 2,
    text: 'Meeting with boss',
    isCompleted: false
  },
  {
    id: 3,
    text: 'Dentist appt',
    isCompleted: true
  }
];

// convert to JSON
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// For Loops
for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 0; i < todos.length; i++) {
  console.log(todo[i].text);
}


//While loops
let i = 0;
while(i < 10) {
  console.log('While loop number: '+i);
  i++;
}

// forEach, map, filter
todos.forEach(function() {
  console.log(todo.text);
});

const todoText = todos.map(function() {
  return todo.text;
});
console.log(todoText);

const todoText = todos.filter(function() {
  return todo.isCompleted === true;
}).map(function(todo) {
  return todo.text;
})
console.log(todoCompleted);

// if statements
// Try to use && || symbols instead of many elif statements.
const x = 10;

if(x==10) {
  console.log('x is 10');
} else if(x >10) {
  console.log('x is greater than 10');
} else {
  console.log('x is less than 10');
}


// Ternary Operator

const x = 10;
const color = x > 10 ? 'red' : 'blue';
// if x is larger than 10, color  == red, else blue. 

switch(color) {
  case 'red':
    console.log('color is red');
    break;
  case 'blue':
    console.log('color is blue');
    break;
  default: 
    console.log('Color is not red or blue');
    break;
}

// Functions
function addNums(num1 = 1, num2 = 2) {
  return (num1+num2);
}

console.log(addNums(5,4));

// Arrow function
const addNums = (num1 = 1, num2 = 2) => num1+num2;
console.log(addNums(5,5));

//OOP
function Person(firstName, lastName, dob) {
  this.firstName = fistName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  // Method
  this.getBirthYear = function() {
    return this.dob.getFullYear();
  }
}

// Instantiation of object
const person1 = new Person('John', 'Doe', '4/3/1980');
console.log(person1);
console.log(person1.firstName);
console.log(person1.dob.getFullYear());
console.log(person1.getBirthYear());

// Prototypes
Person.prototype.getBirthYear = function() {
  return this.dob.getFullYear();
}
// Function is not included in the object this way

// Classes is the new way. Forget about prototyoes
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);

  getBirthYear() {
    return this.dob.getFullYear();
  }
  }
}

