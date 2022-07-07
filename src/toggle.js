import { saveToLocalStorage, myToDoList, renderDashboard, render } from "./index";
import { checkForNotifications } from "./notifications";
import { displayProjects } from "./UI";

//Create a function to toggle between Completed and Not Completed on the task object
export function toggleCompleted() {
    let taskListItem = document.querySelectorAll('.completed');

    taskListItem.forEach(element => {
        element.addEventListener('click', () => {
            (element.style.opacity == "1") ? element.style.opacity = "0.5" : element.style.opacity = "1";
            (element.style.opacity == "1") ? element.parentElement.parentElement.firstChild.style["text-decoration"] = 'line-through' : element.parentElement.parentElement.firstChild.style["text-decoration"]  = 'none';
            (element.style.opacity == "1") ? element.parentElement.parentElement.firstChild.style.color = 'red' : element.parentElement.parentElement.firstChild.style.color  = 'white';

            let x = element.parentElement.firstChild.textContent;
            myToDoList[Number(x)].completed = (element.style.opacity == "1") ? true : false;
           saveToLocalStorage();
        }); 
    });
};

toggleCompleted();

//Create a function that remembers to keep the task title slashed if toggled
export function keepSlashed() {
    let taskListItem = document.querySelectorAll('.completed');

    taskListItem.forEach(e => {
        (e.style.opacity == "1") ? e.parentElement.parentElement.firstChild.style["text-decoration"] = 'line-through' : e.parentElement.parentElement.firstChild.style["text-decoration"] = 'none';
        (e.style.opacity == "1") ? e.parentElement.parentElement.firstChild.style.color = 'red' : e.parentElement.parentElement.firstChild.style.color  = 'white';
    })
}


//Create a function that adjusts the task date in the todo list object array
export function editDate() {
    let taskDate = document.querySelectorAll('.date');
    taskDate.forEach(element => {
       element.firstChild.addEventListener("change", () => {
        let x = element.parentElement.firstChild.textContent;
        myToDoList[Number(x)].date = element.firstChild.value;
        saveToLocalStorage();
        render(myToDoList);
       });
    });
};

editDate();

//Create a function that adjusts the priority level
export function adjustPriority() {
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

//Create a function to toggle a reminder
export function toggleReminder() {
    let remindMe = document.querySelectorAll('.reminder');

    remindMe.forEach(element => {
        element.firstChild.addEventListener("change", () => {
            let x = element.parentElement.firstChild.textContent;
            (element.firstChild.checked === true) ? myToDoList[Number(x)].remind = true : myToDoList[Number(x)].remind = false;
            saveToLocalStorage();
            render(myToDoList);
        })
    })
}

toggleReminder();

//Create a function to add or edit a project
export function adjustProject() {
    let changeProject = document.querySelectorAll('.addedProject');

    changeProject.forEach(element => {
        element.addEventListener("click", () => {
            //Create an input to replace the project button
            let newProjectInput = document.createElement('input');
            newProjectInput.type = "text";
            newProjectInput.className = "addedProject";
            newProjectInput.id = "addedProject";
            newProjectInput.name = "addedProject";
            newProjectInput.style.display = "block";
            newProjectInput.placeholder = "Add Project or Enter Space to Delete...";
            newProjectInput.setAttribute('size', newProjectInput.getAttribute('placeholder').length);

            element.parentElement.insertBefore(newProjectInput, element.nextElementSibling);
            element.style.display = "none";
            
            //add a change event listener to the newly created input
            newProjectInput.addEventListener("change", () => {
                element.textContent = newProjectInput.value;
                element.style.display = "block";
                newProjectInput.style.display = "none";

                let x = element.parentElement.lastChild.firstChild.textContent;
                (element.textContent === " ") ? myToDoList[Number(x)].project = "" : myToDoList[Number(x)].project = element.textContent;
                saveToLocalStorage();
                render(myToDoList);

                //simulate a click to auto-update the change in projects
                document.getElementById('projectsSection').click();
            })

            //add an event listener to close the created input without changing
            document.addEventListener('click', (e) => {
                let isClickInside = element.contains(e.target);
                let exceptAddButton = newProjectInput.contains(e.target);

                if (!isClickInside && !exceptAddButton) {
                    newProjectInput.style.display = "none";
                    element.style.display = "block";
                };
            });

            
        })

    })
}

adjustProject();

//Create a function to edit the task title
export function editTaskTitle() {
    let taskTitle = document.querySelectorAll('.task');

    taskTitle.forEach(element => {
        element.addEventListener("click", () => {
            //Create input for the title
            let newTitleInput = document.createElement('input');
            newTitleInput.type = "text";
            newTitleInput.className = "task";
            newTitleInput.id = "task";
            newTitleInput.name = "task";
            newTitleInput.style.display = "block";
            newTitleInput.placeholder = "Edit the task title or click out to cancel...";
            
            element.parentElement.prepend(newTitleInput);
            element.style.display = "none";

            let x = element.parentElement.lastChild.firstChild.textContent;
            
            //add a change event listener for the title input
            newTitleInput.addEventListener("change", () => {
                element.textContent = newTitleInput.value;
                newTitleInput.style.display = "none";
                element.style.display = "block";

                myToDoList[Number(x)].title = element.textContent;
                saveToLocalStorage();
                render(myToDoList);
            })

            //add an event listener to close the created input without changing
            document.addEventListener('click', (e) => {
                let isClickInside = element.contains(e.target);
                let exceptAddButton = newTitleInput.contains(e.target);

                if (!isClickInside && !exceptAddButton) {
                    newTitleInput.style.display = "none";
                    element.style.display = "block";
                };
            });

        })
    })
}

editTaskTitle();

//Create a function to edit the task notes
export function editTaskNotes() {
    let taskNotes = document.querySelectorAll('.notes');

    taskNotes.forEach(element => {
        element.addEventListener("click", () => {
            //Create input for the title
            let newNotesInput = document.createElement('textarea');
            newNotesInput.className = "notes";
            newNotesInput.id = "notes";
            newNotesInput.name = "notes";
            newNotesInput.style.display = "block";
            newNotesInput.rows = "4";
            newNotesInput.cols = "40";
            newNotesInput.placeholder = "Edit the task notes or click out to cancel...";

            element.parentElement.insertBefore(newNotesInput, element.parentElement.lastChild);
            element.style.display = "none";

            let x = element.parentElement.lastChild.firstChild.textContent;
            
            //add a change event listener for the title input
            newNotesInput.addEventListener("change", () => {
                element.textContent = newNotesInput.value;
                newNotesInput.style.display = "none";
                element.style.display = "block";

                myToDoList[Number(x)].notes = element.textContent;
                saveToLocalStorage();
                render(myToDoList);
            })

            //add an event listener to close the created input without changing
            document.addEventListener('click', (e) => {
                let isClickInside = element.contains(e.target);
                let exceptAddButton = newNotesInput.contains(e.target);

                if (!isClickInside && !exceptAddButton) {
                    newNotesInput.style.display = "none";
                    element.style.display = "block";
                };
            });

        })
    })
}

editTaskNotes();
