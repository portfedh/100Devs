document.querySelector('#check').addEventListener('click', check)

function check() {
  const age = document.querySelector('#age').value
  alert(age)
  
  const maxHr = 220 - age;
  
  const fiftyPercent = maxHr * (50/100);
  const sixtyPercent = maxHr * (60/100);
  const seventyPercent = maxHr * (70/100);
  const eightyPercent = maxHr * (80/100);
  const ninetyPercent = maxHr * (90/100);
  const hundredPercent = maxHr * (100/100);


  alert(fiftyPercent)
  alert(sixtyPercent)
  alert(seventyPercent)
  alert(eightyPercent)
  alert(ninetyPercent)
  alert(hundredPercent)
}
