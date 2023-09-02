
// Aurora Object
/* *********** */
const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25,
    xp: 0,

    describe() {
        return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points`;
    }
};

// Auroras health is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learns a new skill
aurora.xp += 15;

console.log(aurora.describe());


// Dog Object
/* *********** */

let dog = {
    name: 'Otto',
    species: 'Unique',
    size: 'medium',
    barks: 'Guau guau',

    bark() {
        return `${this.barks}, ${this.barks}`
    }
}

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

// Bank Account
/* *********** */

let account = {
    name: 'Alex',
    balance: 0,
    
    credit (value) {
        this.balance += value
    },

    describe() {
        return ` Account name: ${this.name}, balance: ${this.balance}.` 
    }
}

console.log(account.describe());

account.credit(250);

account.credit(-80);

console.log(account.describe());