// Retrieve tasks and nextId from localStorage
// let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
const tasksList = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
checkDate = dayjs();
const task = [];
var form = document.querySelector("#kanbanForm");
const toDoLane = document.querySelector("#todo-cards");

const loadCards = () => {
    for (let i=0; i<tasksList.length; i++){
    addCard(tasksList[i]);
}}

loadCards(tasksList);

// Takes input from form and adds to card
form.addEventListener("submit", (e) => {
    e.preventDefault();
    var newTask = new FormData(form);
    console.log(newTask);
    var newTaskObject = Object.fromEntries(newTask);
    console.log(newTaskObject);
    addCard(newTaskObject);
    tasksList.push(newTaskObject);
    localStorage.setItem('tasks', JSON.stringify(tasksList));
    form.reset(); 
})

// Adding card to the DOM
function addCard (nto) {
    title = nto.title;
    dueDate = dayjs(nto.dueDate);
    taskDesc = nto.taskArea;
    let toDoCard = document.createElement("div");
    toDoCard.setAttribute("draggable", "true");
    toDoCard.id = generateTaskId(nextId);
    toDoCard.innerHTML = 
    `<div class="todocard">
        <h1>${title}</h1>
        <h3>${taskDesc}</h3>
        <p>${dueDate}</p>
        <button class="close-button">Close</button>
    </div>`;    
    toDoCard.addEventListener("dragstart", () => {
        toDoCard.classList.add("is-dragging");
    });

    console.log(dueDate);
    toDoCard.addEventListener("dragend", () => {
        toDoCard.classList.remove("is-dragging");
        });

        if (dueDate.diff(checkDate, 'day') > 0){
            console.log('Not Due Yet');
            toDoCard.classList.add("not-due");
        } else if (dueDate.diff(checkDate, 'day') < 0){
            console.log('Past Due');
            toDoCard.classList.add("past-due");
        }  else {
            console.log('Due Today');
            toDoCard.classList.add("due-today");
        }   ; 
    toDoLane.appendChild(toDoCard);
}

// Adding functionality to drag and drop cards on board

const drag = document.querySelectorAll(".todocard");
const drop = document.querySelectorAll(".swimlane");

drag.forEach((task) => {
    task.addEventListener("dragstart", () => {
        task.classList.add("is-dragging");
    });
    task.addEventListener("dragend", () => {
        task.classList.remove("is-dragging");
    });
});

drop.forEach((zone) => {
    zone.addEventListener("dragover", (e) => {
        e.preventDefault();

        const bottomTask = insertAboveTask(zone, e.clientY);
        const curTask = document.querySelector(".is-dragging");

        if (!bottomTask) {
            zone.appendChild(curTask);
        } else {
            zone.insertBefore(curTask, bottomTask);
        }
    });
});

const insertAboveTask = (zone, mouseY) => {
    const els = zone.querySelectorAll(".task:not(.is-dragging)");

    let closestTask = null;
    let closestOffset = Number.NEGATIVE_INFINITY;

    els.forEach((task) => {
        const { top } = task.getBoundingClientRect();

        const offset = mouseY - top;

        if (offset < 0 && offset > closestOffset){
            closestOffset = offset;
            closestTask = task;
        }

    });

    return closestTask;
};

// Creates Task ID and adds to local storage
function generateTaskId() {
    nextId++;
    localStorage.setItem('nextId', nextId);
    return nextId;
}



// Todo: create a function to generate a unique task id
// function generateTaskId() {

// }

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
