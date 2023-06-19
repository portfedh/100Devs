// Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function streetFighter(name, sex, power, life){
    this.name = name;
    this.sex = sex;
    this.power = Number(power);
    this.life = Number(life);

    this.damage = function() {
        this.power -= 10;
    }

    this.die = function(){
        this.life = 0
        console.log('You dead')
    }

    this.powerUp = function(){
        this.power += 1000;
    }
}

// Test Methods
let Ryu = new streetFighter('Ryu', 'Male', 1000, 100);
console.log(Ryu)
Ryu.die()
console.log(Ryu)