//Create a constructor with 4 properties and 3 methods

class makeComputer{
    constructor(ram, SSD, processor){
        this.ram = ram;
        this.ssd = SSD;
        this.processor = processor;
        this.status = 'Off';
    }

    turnOn(){
        this.status = 'On';
    };

    printStats(){
        console.log(`RAM: ${this.ram}`)
        console.log(`SSD: ${this.ssd}`)
        console.log(`Processor: ${this.processor}`)
        console.log(`Status: ${this.status}`)
    };

}

myComputer = new makeComputer('16GB', '512GB', 'Intel i9');
myComputer.turnOn();
myComputer.printStats();