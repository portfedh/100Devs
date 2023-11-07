const deleteBtn = document.querySelectorAll(".del");
const todoItem = document.querySelectorAll("span.not");
const todoComplete = document.querySelectorAll("span.completed");
const startButton = document.querySelectorAll(".start");
const stopButton = document.querySelectorAll(".stop");
const resetButton = document.querySelectorAll(".reset");
const completed = document.querySelector(".span.completed");

Array.from(deleteBtn).forEach((el) => {
  el.addEventListener("click", deleteTodo);
});

Array.from(todoItem).forEach((el) => {
  el.addEventListener("click", markComplete);
});

Array.from(todoComplete).forEach((el) => {
  el.addEventListener("click", markIncomplete);
});

async function deleteTodo() {
  const todoId = this.parentNode.dataset.id;
  try {
    const response = await fetch("todos/deleteTodo", {
      method: "delete",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        todoIdFromJSFile: todoId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function markComplete() {
  const todoId = this.parentNode.dataset.id;
  try {
    const response = await fetch("todos/markComplete", {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        todoIdFromJSFile: todoId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function markIncomplete() {
  const todoId = this.parentNode.dataset.id;
  try {
    const response = await fetch("todos/markIncomplete", {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        todoIdFromJSFile: todoId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function startTimer(todoId) {
  try {
    const response = await fetch("/todos/startTimer", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todoIdFromJSFile: todoId,
      }),
    });

    if (response.ok) {
      console.log("Timer started successfully.");
    } else {
      console.error("Failed to start the timer.");
    }
  } catch (err) {
    console.error("An error occurred:", err);
  }
}

async function stopTimer(todoId) {
  try {
    const response = await fetch("/todos/stopTimer", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todoIdFromJSFile: todoId,
      }),
    });

    if (response.ok) {
      console.log("Timer stopped successfully.");
      const timerElement = document.querySelector(
        `[data-timer-id="${todoId}"]`
      );
      clearInterval(timerElement.getAttribute("data-interval-id"));
    } else {
      console.error("Failed to stop the timer.");
    }
  } catch (err) {
    console.error("An error occurred:", err);
  }
}

async function resetTimer(todoId) {
  try {
    const response = await fetch("/todos/resetTimer", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todoIdFromJSFile: todoId,
      }),
    });

    if (response.ok) {
      console.log("Timer reset successfully.");
      const timerElement = document.querySelector(
        `[data-timer-id="${todoId}"]`
      );
      clearInterval(timerElement.getAttribute("data-interval-id"));
      timerElement.textContent = "00:00:00";
      timerElement.setAttribute("data-elapsed-time", "0");
      updateTimerDisplay(todoId, 0);
    } else {
      console.error("Failed to reset the timer.");
    }
  } catch (err) {
    console.error("An error occurred:", err);
  }
}

function updateTimerDisplay(todoId, elapsedTime) {
  const timerElement = document.querySelector(`[data-timer-id="${todoId}"]`);

  const seconds = Math.floor(elapsedTime % 60);
  const minutes = Math.floor((elapsedTime / 60) % 60);
  const hours = Math.floor(elapsedTime / 3600);

  const formattedTime = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  timerElement.textContent = formattedTime;
}

//live counter
function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(remainingSeconds).padStart(2, "0")}`;
}

function updateClientTimerDisplay(todoId) {
  const timerElement = document.querySelector(`[data-timer-id="${todoId}"]`);
  let elapsedTime = parseInt(
    timerElement.getAttribute("data-elapsed-time") || "0"
  );

  const intervalId = setInterval(() => {
    elapsedTime++;
    timerElement.textContent = formatTime(elapsedTime);
    timerElement.setAttribute("data-elapsed-time", elapsedTime);
  }, 1000);

  // Store the interval ID in a data attribute
  timerElement.setAttribute("data-interval-id", intervalId);
}

// Function to fetch and update the timer data from the server
async function fetchAndUpdateTimerData(todoId) {
  try {
    const response = await fetch(`/todos/getTimer/${todoId}`);
    if (response.ok) {
      const data = await response.json();
      const { elapsedTime } = data;
      updateClientTimerDisplay(todoId, elapsedTime);
    } else {
      console.error("Failed to fetch timer data from the server.");
    }
  } catch (err) {
    console.error("An error occurred:", err);
  }
}

//loop

async function updateTaskTimers() {
  const tasks = document.querySelectorAll(".task");
  for (const task of tasks) {
    const startBtn = task.querySelector(".start-timer");
    const stopBtn = task.querySelector(".stop-timer");
    const resetBtn = task.querySelector(".reset-timer");
    const todoId = task
      .querySelector(".start-timer")
      .getAttribute("data-timer-id");

    //start
    try {
      const response = await fetch(`/todos/getTimer/${todoId}`);
      if (response.ok) {
        const data = await response.json();
        const { elapsedTime } = data;
        updateTimerDisplay(todoId, elapsedTime);
      } else {
        console.error("Failed to fetch timer data from the server.");
      }
    } catch (err) {
      console.error("An error occurred:", err);
    }

    startBtn.addEventListener("click", async () => {
      try {
        await fetchAndUpdateTimerData(todoId);
        startTimer(todoId);
      } catch (err) {
        console.error("An error occurred:", err);
      }
      if (task.classList.contains("completed")) {
        startBtn.disabled = true;
      }
    });

    //   async function clickHandler() {
    //     try {
    //         await fetchAndUpdateTimerData(todoId);
    //         startTimer(todoId);
    //     } catch (err) {
    //         console.error('An error occurred:', err);
    //     }
    // }

    // startBtn.addEventListener('click', clickHandler);

    // if (task.classList.contains('completed')) {
    //     startBtn.removeEventListener('click', clickHandler);
    // }

    //stop
    stopBtn.addEventListener("click", async () => {
      try {
        await stopTimer(todoId);
        const response = await fetch(`/todos/getTimer/${todoId}`);
        if (response.ok) {
          const data = await response.json();
          const { elapsedTime } = data;
          updateTimerDisplay(todoId, elapsedTime);
        } else {
          console.error("Failed to fetch timer data from the server.");
        }
      } catch (err) {
        console.error("An error occurred:", err);
      }
    });
    //reset
    resetBtn.addEventListener("click", async () => {
      try {
        await resetTimer(todoId);
      } catch (err) {
        console.error("An error occurred:", err);
      }
    });
  }
  //disabling buttons upon completion
}

updateTaskTimers();

window.addEventListener("load", () => {
  //switch statement

  const personalisation = document.getElementById("switch");

  let day;

  switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
  }

  personalisation.innerHTML = "Hi there, happy " + day + "!";
});
