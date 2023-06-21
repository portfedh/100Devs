// Array Cardio Day 1

// Data to work with
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
];

const people = ['Beck, Glen', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 
'Beecher, Henry', 'Bethoven, Ludwig', 'Begin, Menachem','Belloc, Hilaire',
'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter',  'Ben-Gurion, David',
'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana',
'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar',
'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric',
'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell',
'Bethea, Erin', 'Bevan Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose',
'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk',
'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Arrray.prototype.filter()
// 1. Filter la list of investor for those who where born in 1500
// ***************************************************************

// First try
const fifteen = inventors.filter(function(inventor){
  if(inventor.year >= 1500 && inventor.year < 1600) {
    return true; // keep it
  }
});
// Simplified version
const fifteen2 = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year <1600));
// Check
console.table(fifteen);
console.table(fifteen2);


// Arrray.prototype.map(). Will always return the same number of items that you input. 
// 2. Give us an array of the inventors first and last names
// **********************************************************************************
const fullnames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullnames);

// Arrray.prototype.sort().
// 3. Sort the inventors by birth date, oldest to youngest
// **********************************************************************************

// First try
const ordered = inventors.sort(function(a, b) {
  if(a.year > b.year) {
    return 1;
  } else {
    return -1;
  }
});
// Simplified version
const ordered2 = inventors.sort((a,b) => a.year > b.year ? 1 : -1);
// Check
console.table(ordered)
console.table(ordered2)

// Arrray.prototype.reduce().
// 4. How many years did all the inventors live
// **********************************************************************************

// Way using for loop
var totalYears = 0;
for (var i=0; i < inventors.length; i++) {
  totalYears += inventors[i].year
}
console.log(10)
console.log(totalYears)

// Using the reduce method

const totalYears2 = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalYears2)

// 5. Sort the inventors by years lived
// **********************************************************************************

// First try
const oldest = inventors.sort( function(a, b) {
  const lastGuy = a.passed - a.year;
  const nextGuy = b.passed - b.year;
  if(lastGuy > nextGuy) {
    return -1;
  } else{
    return 1;
  }
})
// Simplified
const oldest2 = inventors.sort( function(a, b) {
  const lastGuy = a.passed - a.year;
  const nextGuy = b.passed - b.year;
  return lastGuy > nextGuy ? -1 : 1;
})

console.table(oldest)
console.table(oldest2)

// 6. Create a list of bouleverds in paris that contain 'de' in the name
// **********************************************************************************

// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

  // const category = document.querySelector('.mw-category');
  //   const links = Array.from(category.querySelectorAll('a'));
  //   const de = links
  //               .map(link => link.textContent)
  //               .filter(streetName => streetName.includes('de'));


// 7. Sort people alphabetically by last name
const alpha = people.sort(function(lastOne, nextOne){
  const [alast, afirst] = lastOne.split(', ');
  const [blast, bfirst] = nextOne.split(', ');

  return aLast > blast ? 1 : -1;
});


    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

    const transportation = data.reduce(function(obj, item) {
      if (!obj[item]) {
        obj[item] = 0;
      }
      obj[item]++;
      return obj;
    }, {});

    console.log(transportation);