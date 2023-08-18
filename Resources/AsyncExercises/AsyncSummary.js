// Asynchronous JavaScript in ~10 Minutes - Callbacks, Promises, and Async/Await 
// https://www.youtube.com/watch?v=670f71LTWpM&t=612s
// 17 August 2023

// ***************
// ** Callbacks **
// ***************

// Example 1: Nested callbacks
  setTimeout(() => {
    console.log('3');
    setTimeout(() => {
      console.log('2');
      setTimeout(() =>{
        console.log('1');
      }, 1000);
    }, 1000);
  }, 1000);

// Example 2: Read file with Callbacks
const fs = require('fs')
fs.readFile('./test.txt', {encoding: 'utf-8'}, (err, data) => {
  if(err){
    console.error('Got an error');
    console.error(err);
  } else {
    console.error('Got the data');
    console.log(data);
  }});

// **************
// ** Promises **
// **************

// Example 1: Creating & using a promise.
const myPromise = new Promise((resolve, reject) => {
  const rand = Math.floor(Math.random() * 2);
  if(rand === 0){
    resolve();
  } else{
    reject();
  }})
myPromise
  .then(() => console.log('Success'))
  .catch(() => console.error('Something went wrong')) 

// Example 2: Read file with a Promise
fs.promises.readFile('./test.txt', {encoding: 'utf-8'})
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

// Example 3: Fetch with promises
const fetch = require('node-fetch');
fetch('https://pokeapi.com/api/v2/pokemon/ditto')
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

// *******************
// ** Async / Await **
// *******************

// Example 1: Read file
const loadFile = async() => {
  try{
    const data = await fs.promises.readFile('./test.txt', {encoding: 'utf-8'});
    console.log(data);
  } catch(error){
    console.error(error);
  }}
loadFile();

// Example 2: Load Pokemon
const fetchPokemon = async(id) => {
  try{
    const res = await fetch(`https:pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    console.log(data)
  } catch(err){
    console.error(err);
  }}

