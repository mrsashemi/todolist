import './style.css'


const projects = document.querySelector(".projects");
const newTaskButton = document.querySelector(".newTaskButton");
const taskForm = document.querySelector("#todoSubmit");
const submitButton = document.querySelector("#formSubmitButton");



//Create a to-do list array to hold the todo objects
let myToDoList = [];

/*Create a function that saves the array to localstorage*/
function saveToLocalStorage() {
    localStorage.setItem('Tasks', JSON.stringify(myToDoList))
}

/*Retrieve localstorage*/
const str = localStorage.getItem('Tasks');
let storedTaskArray = JSON.parse(str);

if (str != null) {
    /*Use spread operator to add the stored array to the myLibrary array*/
    myToDoList.push(...storedTaskArray);
}

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

/*Create a function that adds an object to the array upon submitting form*/
function addTaskToDoListArray() {
    /*Reset document grid*/
    removeChildren();
    
    /*declare values and construct new object to be added to myToDoList Array*/
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

    /*reset form*/
    resetFormValues();
    /*save to local storage*/
    saveToLocalStorage();
    /*activate delete and toggle functions upon submitting book form*/
    deleteFromLibrary();
    toggleCompleted();
};



/*Create a function that iterates through the array holding the objects.
For each object in the array, create and append an element to the parent in the document.*/
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

        let completeCheck = document.createElement('li');
        completeCheck.className = "completed";
        let dateCheck = document.createElement('li');
        dateCheck.className = "date";
        let trashButton = document.createElement('li');
        trashButton.textContent = "X";
        trashButton.className = "trash";
        taskManagement.appendChild(completeCheck);
        taskManagement.appendChild(dateCheck);
        taskManagement.appendChild(trashButton);

        let dateInput = document.createElement('input');
        dateInput.type = "date";
        dateCheck.appendChild(dateInput);
    });
};

/*Create a function that displays and closes a pop-up form*/
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

/*Create function that submits the form and prevents default refreshing page */
function preventFormDefault() {
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTaskToDoListArray();
    });

    console.log(myToDoList);
};

preventFormDefault();

/*Create a function to refresh the document grid containing book objects from the array*/
function removeChildren() {
    while (projects.firstChild) {
        projects.removeChild(projects.firstChild);
    };
};

/*Create a function to reset form values*/
function resetFormValues() {
    taskForm.style.display = "none";
    document.querySelector("#todoTitle").value = '';
    document.querySelector("#todoNotes").value = '';
    document.querySelector("#dateDue").value = '';
    document.querySelector("#todoProject").value = '';
    document.querySelector('#remindMe').checked = '';
    document.querySelector('#priorityList').value = '';
};

/*Create a function to remove object from array and from document upon clicking delete button*/
function deleteFromLibrary() {
    let deleteButton = document.querySelectorAll('.trash');
    deleteButton.forEach(element => {
        element.addEventListener('click', () => {
            let x = element.parentElement.firstChild.textContent;
            myToDoList.splice(Number(x), 1);

            myToDoList.forEach(e => {
                e.listNum = myLibrary.indexOf(e);
            });

            element.parentElement.remove();
            saveToLocalStorage();
        });
    });
};

/*Create a function to toggle between Completed and Not Completed on the task object*/
function toggleCompleted() {
    let taskListItem = document.querySelectorAll('.taskListItem');
    taskListItem.forEach(element => {
        let completeToggle = document.querySelector('.completed');
        let taskTitle = document.querySelector('.task')
        (completeToggle.style.opacity == "1") ? taskTitle.style['text-decoration'] = 'line-through' : taskTitle.style['text-decoration'] = 'none';

        completeToggle.addEventListener('click', () => {
            (completeToggle.style.opacity == "1") ? completeToggle.style.opacity = "0.5" : completeToggle.style.opacity = "1";
            (completeToggle.style.opacity == "1") ? taskTitle.style['text-decoration'] = 'line-through' : taskTitle.style['text-decoration'] = 'none';
            //let x = readToggle.parentElement.firstChild.textContent;
            //myLibrary[Number(x)].read = readToggle.textContent;
           // saveToLocalStorage();
        }) 
    })
}

toggleCompleted();

