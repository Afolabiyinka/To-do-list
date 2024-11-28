//Getting your elements to work in javascriopt
const task = document.querySelector("#task");
const button = document.querySelector("#add-task");
const completedTasks = document.querySelector("ul");
const form = document.querySelector("form");

function addTask(e) {
  let newTask = document.createElement("li");
  newTask.innerHTML = task.value;
  completedTasks.appendChild(newTask);
  
  if (task.value === "") {
    completedTasks.removeChild(newTask);
  }
  task.value = '';
  
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  addTask();
});
button.addEventListener("click", addTask);

console.log("Hell0");