import { myToDoList } from ".";
import { addTaskToDoListArray } from "./tasks";

//Cache Dom
const newTaskButton = document.querySelector(".newTaskButton");
const taskForm = document.querySelector("#todoSubmit");

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

//Create a function to reset form values
export function resetFormValues() {
    taskForm.style.display = "none";
    document.querySelector("#todoTitle").value = '';
    document.querySelector("#todoNotes").value = '';
    document.querySelector("#dateDue").value = '';
    document.querySelector("#todoProject").value = '';
    document.querySelector('#remindMe').checked = '';
    document.querySelector('#priorityList').value = '';
};
