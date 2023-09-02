//Create a mouse object that has four properties and three methods

class MakeMouse {
    constructor(mouseColor, mouseSize, mouseName, mouseSex){
        this.color = mouseColor
        this.size = Number(mouseSize)
        this.name = mouseName
        this.sex = mouseSex
        this.print()
    }
    chirp(){
        console.log("Chirp chirp, chirp chirp")
    }
    hide(){
        this.size -= 5
    }
    print(){
        console.log(`Mouse color: ${this.color}`)
        console.log(`Mouse size: ${this.size}`)
        console.log(`Mouse name: ${this.name}`)
        console.log(`Mouse sex: ${this.sex}`)
    }
}

Mia = new MakeMouse("gris", 10, "Mia", "Female")
Mia.chirp()
Mia.hide()
Mia.print()
//Mia.print()