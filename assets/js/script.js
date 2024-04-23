// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

const task = [];
var form = document.querySelector("#kanbanForm");
const toDoLane = document.querySelector("#todo-cards");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    var newTask = new FormData(form);
    console.log(newTask);
    var newTaskObject = Object.fromEntries(newTask);
    console.log(newTaskObject);
    addCard(newTaskObject);
    task.push(newTaskObject);
    
})


function addCard (nto) {
    title = nto.title;
    dueDate = nto.dueDate;
    taskDesc = nto.taskArea;
    let toDoCard = document.createElement("div");
    toDoCard.setAttribute("draggable", "true");
    toDoCard.innerHTML = 
    `<div class="todocard">
        <h1>${title}</h1>
        <h3>${taskDesc}</h3>
        <p>${dueDate}</p>
        <button>Close</button>
    </div>`;    
    toDoLane.appendChild(toDoCard);
}

// Todo: create a function to generate a unique task id
function generateTaskId() {

}

// Todo: create a function to create a task card
function createTaskCard(task) {

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
