//Create a button that adds 1 to a botScore stored in localStorage 

function checkValue(){
    if(localStorage.getItem('score')){
        console.log('Score item exists')
        document.querySelector('#myScore').innerText = localStorage.getItem('score')

    } else{
        console.log('Score item does not exist')
        localStorage.setItem('score', 0)
        document.querySelector('#myScore').innerText = `0`
    }
}

function addOne(){
    myScore = Number(localStorage.getItem('score'))
    myScore += 1;
    localStorage.setItem('score', myScore)
    console.log(`Score is: ${myScore}`)
    document.querySelector('#myScore').innerText = `${myScore}`
}

//localStorage.clear()
checkValue()

