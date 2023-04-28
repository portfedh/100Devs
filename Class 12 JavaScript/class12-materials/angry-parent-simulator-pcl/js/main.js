

// Check for click
document.querySelector('#submit').addEventListener('click', run)

function run() {
  const goal = document.querySelector('#myGoal').value;
  const intro = 'My goal for today is to '
  document.querySelector('#goalOutput').innerText = intro + goal;
}


