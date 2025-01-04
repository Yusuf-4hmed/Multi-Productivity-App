const inputContainer = document.getElementById("input-container");
const taskContainer = document.getElementById("task-container");
const taskInput = document.getElementById("task-input");
const taskBtn = document.getElementById("task-btn");
const tasks = document.getElementById("tasks");
const task = document.getElementById("task");
// Rather press a real button than an on screen one
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter"){
        addTask();
    }
});

const addTask = () => {
    console.log("Add Task Function");
    if (!taskInput.value){
        alert("Please input a task!")
    } else {
        let li = document.createElement("li");
        li.innerText = taskInput.value;
        tasks.appendChild(li);
        let span = document.createElement("SPAN");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    taskInput.value = "";
    saveData();
};
// This is how you mark off a task or remove it
tasks.addEventListener("click", (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("done");
    } else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    saveData();
});

const saveData = () => {
    localStorage.setItem("tasks", tasks.innerHTML)
};
const showTask = () => {
    tasks.innerHTML = localStorage.getItem("tasks");
};
showTask();

// GRAPH
const daysContainer = document.getElementById("days-container");
const day = `<div class="day" id="day"></div>`;

const twentyFive = 365;

for (let i = 0; i < twentyFive; i++){
    daysContainer.innerHTML += day;
}

console.log(Date())