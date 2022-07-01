import './style.css';
import { removeChildren, deleteFromDashboard } from './reset';
import { addTaskToDashboard } from './tasks';
import { editDate, toggleCompleted, adjustPriority, keepSlashed } from './toggle';

//Create a to-do list array to hold the todo objects
export let myToDoList = [];

//Create a function that saves the array to localstorage
export function saveToLocalStorage() {
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
        editDate();
        toggleCompleted();
        adjustPriority();
        keepSlashed();
    }
};

renderDashboard();







