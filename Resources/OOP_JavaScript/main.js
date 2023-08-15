// Pillars of OOP
// **************
    // Encapsulation: Stores all functions & variables with one object.

    // Abstraction: Hides the details of how it works just shows what is essential (input/output).

    // Inheritance: Allows subclasses to expand or modify the base class.

    // Polymorphism: Multiple classes can have methods with the same name that do different things.

// Getters & setters

    // Allow you to access or modify properties in a controlled manner. 
    // You can allow rules to have checks before accessing or changing a property.


// Class Example:
    class Jedi{

        // Constructor
        constructor(name){
            // Property
            this._name = name
        }
        // Method
        speak(){
            console.log(`${this._name} says: May the force be with you.`)
        }
        // Getter
        get name(){
            return this._name
        }
        // Setter
        setName(newName) {
            if (newName.length > 0) {
                this._name = newName;
            }
        }
    }

// Extending the class:
    class JediMaster extends Jedi{
        constructor(name){
            super(name)
        }
        speak(){
            console.log(`${this._name} says: Do or do not. There is no try.`)
        }
    }

// Using the Class:
    let ObiOneKenobi = new Jedi('Obi One Kenobi')
    console.log(ObiOneKenobi.name) // --> 'Obi One Kenobi'
    ObiOneKenobi.speak() // --> 'May the force be with you.'

// Using the Extended Class:
    let Yoda = new JediMaster('Yoda')
    console.log(Yoda.name) // --> 'Yoda'
    Yoda.speak() // --> 'Do or do not. There is no try.
