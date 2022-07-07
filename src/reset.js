import { saveToLocalStorage, myToDoList, render } from "./index";
import { sectionTitle } from "./notifications";
import { addTaskToDashboard } from "./tasks"
import { displayHome } from "./UI";

//Create a function to refresh the document grid containing book objects from the array*/
export function removeChildren() {
    const projects = document.querySelector(".projects");
    
    while (projects.firstChild) {
        projects.removeChild(projects.firstChild);
    };
};

//Create a function to remove object from array and from document upon clicking delete button
export function deleteFromDashboard(arr) {
    let deleteButton = document.querySelectorAll('.trash');
    deleteButton.forEach(element => {
        element.addEventListener('click', () => {
            //find the index of element in the array that needs to be sliced
            let x = element.parentElement.firstChild.textContent;
            arr.splice(Number(x), 1);

            //filter the original array in case deleting within a different tab or project
            let newArr = myToDoList.filter(e => e.title != element.parentElement.parentElement.firstChild.textContent)
            myToDoList.splice(0, myToDoList.length);
            myToDoList.push(...newArr);

            //adjust the index
            arr.forEach(e => {
                e.listnum = arr.indexOf(e);
            });

            //render the UI
            element.parentElement.parentElement.remove();
            removeChildren();
            render(arr);
            saveToLocalStorage();
            deleteFromDashboard();
        });
    });
};