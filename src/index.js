import './style.css'

//Cache DOM
const projects = document.querySelector(".projects");
const newTaskButton = document.querySelector(".newTaskButton");
const taskForm = document.querySelector("#todoSubmit");



//Create a to-do list array to hold the todo objects
let myToDoList = [];

//Create a function that saves the array to localstorage
function saveToLocalStorage() {
    localStorage.setItem('Tasks', JSON.stringify(myToDoList))
}

//Retrieve localstorage
function renderDashboard() {
    const str = localStorage.getItem('Tasks');
    let storedTaskArray = JSON.parse(str);

    if (str != null) {
        //Use spread operator to add the stored array to the myToDoList array
        myToDoList.push(...storedTaskArray);
    }

    if (myToDoList.length !== 0) {
        removeChildren();
        addTaskToDashboard(myToDoList);
        deleteFromDashboard();
    }
};

renderDashboard();


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
function addTaskToDoListArray() {
    //Reset document grid
    removeChildren();
    
    //declare values and construct new object to be added to myToDoList Array
    let listNum = myToDoList.length;
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
    //activate delete and toggle functions upon submitting todo form
    deleteFromDashboard();
    toggleCompleted();
    editDate();
    adjustPriority();
};





//Create a function that iterates through the array holding the objects.
//For each object in the array, create and append an element to the parent in the document.
function addTaskToDashboard(arr) {
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
        listNumber.textContent = element.listNum;
        taskManagement.appendChild(listNumber);

        let completeCheck = document.createElement('li');
        completeCheck.className = "completed";
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

//Create a function that displays and closes a pop-up form
function displayTaskForm() {
    newTaskButton.addEventListener('click', () => {
            taskForm.style.display = "block";

            document.addEventListener('click', (e) => {
                let isClickInside = taskForm.contains(e.target);
                let exceptAddButton = newTaskButton.contains(e.target);

                if (!isClickInside && !exceptAddButton) {
                    taskForm.style.display = "none";
                };
            });
    });
};

displayTaskForm();

//Create function that submits the form and prevents default refreshing page
function preventFormDefault() {
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTaskToDoListArray();
    });
};

preventFormDefault();

//Create a function to refresh the document grid containing book objects from the array*/
function removeChildren() {
    while (projects.firstChild) {
        projects.removeChild(projects.firstChild);
    };
};

//Create a function to reset form values
function resetFormValues() {
    taskForm.style.display = "none";
    document.querySelector("#todoTitle").value = '';
    document.querySelector("#todoNotes").value = '';
    document.querySelector("#dateDue").value = '';
    document.querySelector("#todoProject").value = '';
    document.querySelector('#remindMe').checked = '';
    document.querySelector('#priorityList').value = '';
};

//Create a function to remove object from array and from document upon clicking delete button
function deleteFromDashboard() {
    let deleteButton = document.querySelectorAll('.trash');
    deleteButton.forEach(element => {
        element.addEventListener('click', () => {
            let x = element.parentElement.firstChild.textContent;
            myToDoList.splice(Number(x), 1);

            myToDoList.forEach(e => {
                e.listNum = myToDoList.indexOf(e);
            });

            element.parentElement.parentElement.remove();
            saveToLocalStorage();
        });
    });
};

//Create a function to toggle between Completed and Not Completed on the task object
function toggleCompleted() {
    let taskListItem = document.querySelectorAll('.completed');
    taskListItem.forEach(element => {
        element.addEventListener('click', () => {
            (element.style.opacity == "1") ? element.style.opacity = "0.5" : element.style.opacity = "1";
            (element.style.opacity == "1") ? element.parentElement.parentElement.firstChild.style['text-decoration'] = 'line-through' : element.parentElement.parentElement.firstChild.style['text-decoration'] = 'none';

            let x = element.parentElement.firstChild.textContent;
            myToDoList[Number(x)].completed = true;
           saveToLocalStorage();
        }); 
    });
};

toggleCompleted();

//Create a function that adjusts the task date in the todo list object array
function editDate() {
    let taskDate = document.querySelectorAll('.date');
    taskDate.forEach(element => {
       element.firstChild.addEventListener("change", () => {
        let x = element.parentElement.firstChild.textContent;
        myToDoList[Number(x)].date = element.firstChild.value;
        saveToLocalStorage();
       });
    });
};

editDate();

//Create a function that adjusts the priority level
function adjustPriority() {
    let taskPriority = document.querySelectorAll('.priority');
    taskPriority.forEach(element => {
        element.addEventListener("mouseover", () =>{
            element.style["background-color"] = "rgba(255,168,76,1)";
        })

        element.addEventListener("mouseout", () => {
            if (element.textContent == "High") {
                element.style["background-color"] = "rgba(255, 0, 0, 0.5)";
            } else if (element.textContent == "Medium") {
                element.style["background-color"] = "rgba(255, 255, 0, 0.5)"
            } else if (element.textContent == "Low") {
                element.style["background-color"] = "rgba(0, 128, 0, 0.5)"
            }
        })

        element.addEventListener("click", () => {
            if (element.textContent == "High") {
                element.textContent = "Medium"
                element.style["background-color"] = "rgba(255, 255, 0, 0.5)"
            } else if (element.textContent == "Medium") {
                element.textContent = "Low" 
                element.style["background-color"] = "rgba(0, 128, 0, 0.5)"
            } else if (element.textContent == "Low") {
                element.textContent = "High"
                element.style["background-color"] = "rgba(255, 0, 0, 0.5)";
            }

            let x = element.parentElement.firstChild.textContent;
            myToDoList[Number(x)].priority = element.textContent;
            saveToLocalStorage();
        })
    })
}

adjustPriority();
