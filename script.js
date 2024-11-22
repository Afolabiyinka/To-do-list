//Changing the theme of the application

//Getting the elements to change the theme
const themeContainer = document.querySelector("#theme-change");
const body = document.body;
themeContainer.addEventListener("click", function () {
  if (body.className === "light-mode") {
    body.className = "dark-mode";
    themeContainer.innerHTML = `      <img src="/Icon/sun.svg" alt="">
`;
  } else {
    body.className = "light-mode";
    themeContainer.innerHTML = ` <img src="/Icon/moon.svg" alt=""> `;
  }
});

//Getting our elements to work with in javascript
const ctaBtn = document.getElementById("add-btn");
const task = document.getElementById("task");
const taskDate = document.getElementById("task-date");

// Declaring a function to add a task
function addTask() {
  const completedTasks = document.getElementById("completed-tasks");
  let completed = completedTasks.appendChild(document.createElement("li"));
  completed.innerText = `${task.value} `;

  let completedTime = completedTasks.append(document.createElement("h3"));
  completedTime.innerText = `${taskDate.value}`;

  let clearTask = completed.appendChild(document.createElement("h1"));
  clearTask.innerHTML = `   <img src="/Icon/moon.svg" alt=""> `;
  if (task.value === "") {
    // task.setAttribute(true)
    completed.remove();
  }
  task.value = "";
  taskDate.value = "";
}

function storeEverything() {
  localStorage.setItem("Theme", JSON.stringify(body.className));
}
ctaBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addTask();
  storeEverything()
});

function getItems (){

  let preferedTheme =JSON.parse(localStorage.getItem("Theme"))
  body.className = preferedTheme;
}
  

window.addEventListener("DOMContentLoaded", () =>{
  getItems()
  storeEverything()
  console.log("Settings ");
})