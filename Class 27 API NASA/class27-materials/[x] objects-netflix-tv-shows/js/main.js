// Create a Netflix TV Show class 
//with a constructor that makes Netflix TV Shows with 4 properties and 3 methods


class tvShow{
    constructor(title, year, raiting, ranking){
        this.title = title
        this.year = year
        this.raiting = raiting
        this.ranking = ranking
        this.play = false
    }
    playMovie(){
        this.play = true
    }

    rateMovie(raiting){
        this.raiting = raiting
    }

    stopMovie(){
        this.play = false
    }

    printMovie(){
        console.log(`Title: ${this.title}`)
        console.log(`Year: ${this.year}`)
        console.log(`Raiting: ${this.raiting}`)
        console.log(`Ranking: ${this.ranking}`)
        console.log(`Playing: ${this.play}`)
    }
}

let dune = new tvShow('Dune', '2023', '4.7', '1')
dune.playMovie()
dune.printMovie()