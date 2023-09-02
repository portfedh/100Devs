//Write your pseduo code first! 

var tempCelsius = prompt('What is the current temperature in Celsius');

function convert(celsius) {
    var tempFarenheit = tempCelsius*1.8 + 32;
    alert(tempFarenheit);
}

convert(tempCelsius);