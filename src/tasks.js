import { myToDoList, saveToLocalStorage } from "./index";
import { deleteFromDashboard, removeChildren } from "./reset";
import { toggleCompleted, editDate, adjustPriority } from "./toggle";
import { resetFormValues } from "./forms";
import { displayProjects, showToday, showWeek } from "./UI";

//Create a factory function that generates todo objects
const toDo = function(listnum, title, notes, date, project, completed, remind, priority ) {
    return {
        listnum,
        title,
        notes,
        date,
        project,
        completed,
        remind,
        priority
    };
};

//Create a function that adds an object to the array upon submitting form
export function addTaskToDoListArray() {
    //Reset document grid
    removeChildren();

    let index = myToDoList.length;
    
    //declare values and construct new object to be added to myToDoList Array
    let listNum = index;
    let title = document.querySelector("#todoTitle").value;
    let notes = document.querySelector("#todoNotes").value;
    let date = document.querySelector("#dateDue").value;
    let project = document.querySelector("#todoProject").value;
    let completed = false;
    let remind = document.querySelector('#remindMe').checked;
    let priority = document.querySelector('#priorityList').value;
    const TaskItem = new toDo(listNum, title, notes, date, project, completed, remind, priority);
    myToDoList.push(TaskItem);
    addTaskToDashboard(myToDoList);


    //reset form
    resetFormValues();
    //save to local storage
    saveToLocalStorage();
    //activate delete, toggle, and UI functions upon submitting todo form
    deleteFromDashboard();
    toggleCompleted();
    editDate();
    adjustPriority();
    showToday();
    showWeek();
    displayProjects();
};





//Create a function that iterates through the array holding the objects.
//For each object in the array, create and append an element to the parent in the document.
export function addTaskToDashboard(arr) {
    const projects = document.querySelector(".projects");

    arr.forEach(element => {
        let todoTask = document.createElement('div');
        projects.appendChild(todoTask);
        todoTask.className = "taskListItem";

        let taskTitle = document.createElement('h4');
        taskTitle.className = "task";
        taskTitle.textContent = element.title;
        todoTask.appendChild(taskTitle);

        let noteSection = document.createElement('p');
        noteSection.className = "notes";
        noteSection.textContent = element.notes;
        todoTask.appendChild(noteSection);

        let taskManagement = document.createElement('ul');
        taskManagement.className = "manageTask";
        todoTask.appendChild(taskManagement);

        let listNumber = document.createElement('li');
        listNumber.className = "listNum"; 
        listNumber.style.display = 'none';
        listNumber.textContent = arr.indexOf(element);

        let completeCheck = document.createElement('li');
        completeCheck.className = "completed";

        if (element.completed == true) {
            completeCheck.style.opacity = 1;
        } else if (element.completed == false) {
            completeCheck.style.opacity = 0.5;
        }

        let dateCheck = document.createElement('li');
        dateCheck.className = "date";
        let priorityCheck = document.createElement('li');
        priorityCheck.textContent = element.priority;

        if (priorityCheck.textContent == "High") {
            priorityCheck.style["background-color"] = "rgba(255, 0, 0, 0.5)";
        } else if (priorityCheck.textContent == "Medium") {
            priorityCheck.style["background-color"] = "rgba(255, 255, 0, 0.5)"
        } else if (priorityCheck.textContent == "Low") {
            priorityCheck.style["background-color"] = "rgba(0, 128, 0, 0.5)"
        }

        priorityCheck.className = "priority";
        let trashButton = document.createElement('li');
        trashButton.textContent = "X";
        trashButton.className = "trash";

        taskManagement.appendChild(listNumber);
        taskManagement.appendChild(completeCheck);
        taskManagement.appendChild(dateCheck);
        taskManagement.appendChild(priorityCheck);
        taskManagement.appendChild(trashButton);

        let dateInput = document.createElement('input');
        dateInput.type = "date";
        dateInput.value = element.date;
        dateCheck.appendChild(dateInput);
    });
};