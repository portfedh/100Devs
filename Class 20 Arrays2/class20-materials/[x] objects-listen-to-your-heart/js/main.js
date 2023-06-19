//Create a stopwatch object that has four properties and three methods

// Object
let stopwatch = {
    hours: 10,
    minutes: 24,
    seconds: 5,

    reset: function(){
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
    },

    midday: function(){
        this.hours = 12;
        this.minutes = 0;
        this.seconds = 0;
    },

    lunchtime: function(){
        this.hours = 17;
        this.minutes = 30;
        this.seconds = 0;
    },

};

// Testing
console.log(`Hours: ${stopwatch.hours}`)
console.log(`Minutes: ${stopwatch.minutes}`)
console.log(`Seconds: ${stopwatch.seconds}`)

stopwatch.reset()
console.log(`Reseting Stopwatch:`)
console.log(`Hours: ${stopwatch.hours}`)
console.log(`Minutes: ${stopwatch.minutes}`)
console.log(`Seconds: ${stopwatch.seconds}`)

stopwatch.midday()
console.log(`Midday Time:`)
console.log(`Hours: ${stopwatch.hours}`)
console.log(`Minutes: ${stopwatch.minutes}`)
console.log(`Seconds: ${stopwatch.seconds}`)

stopwatch.lunchtime()
console.log(`Lunchtime Time:`)
console.log(`Hours: ${stopwatch.hours}`)
console.log(`Minutes: ${stopwatch.minutes}`)
console.log(`Seconds: ${stopwatch.seconds}`)