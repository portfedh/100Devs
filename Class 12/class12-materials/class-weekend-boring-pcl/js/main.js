document.querySelector('#check').addEventListener('click', controller)


function controller(){
  age = checkInput();
  percentArray = calculate();
  writeValues()
}


function checkInput() {
  console.log('Function check executed');
  var age = document.querySelector('#age').value;
  if (age === "") {
    console.log("Default value is empty. Running prompt");
    while (age === "") {
      age = prompt("Please enter your age to calculate your max heart rates:");
    }
    return age;
  } else {
    console.log("Default value is not empty");
    console.log("Age: " + age);
    return age;
  }
}

function calculate() {
  const maxHr = 220 - age;
  const fiftyPercent = Math.round(maxHr * (50/100));
  const sixtyPercent = Math.round(maxHr * (60/100));
  const seventyPercent = Math.round(maxHr * (70/100));
  const eightyPercent = Math.round(maxHr * (80/100));
  const ninetyPercent = Math.round(maxHr * (90/100));
  const hundredPercent = Math.round(maxHr * (100/100));

  console.log("MaxHr: " + maxHr);
  console.log("50%: " + fiftyPercent);
  console.log("60%: " + sixtyPercent);
  console.log("70%: " + seventyPercent);
  console.log("80%: " + eightyPercent);
  console.log("90%: " + ninetyPercent);
  console.log("100%: " + hundredPercent);

  let percentArrary = [hundredPercent, ninetyPercent, eightyPercent, seventyPercent, sixtyPercent, fiftyPercent];
  return percentArrary;
}

function writeValues() {
  console.log(percentArray)

  document.querySelector('#row1').innerText = percentArray[1] + ' - ' + percentArray[0];
  document.querySelector('#row2').innerText = percentArray[2] + ' - ' + percentArray[1];
  document.querySelector('#row3').innerText = percentArray[3] + ' - ' + percentArray[2];
  document.querySelector('#row4').innerText = percentArray[4] + ' - ' + percentArray[3];
  document.querySelector('#row5').innerText = percentArray[5] + ' - ' + percentArray[4];
}