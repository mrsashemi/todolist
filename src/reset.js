import { saveToLocalStorage, myToDoList } from "./index";
import { sectionTitle } from "./notifications";
import { addTaskToDashboard } from "./tasks"

//Create a function to refresh the document grid containing book objects from the array*/
export function removeChildren() {
    const projects = document.querySelector(".projects");
    
    while (projects.firstChild) {
        projects.removeChild(projects.firstChild);
    };
};

//Create a function to remove object from array and from document upon clicking delete button
export function deleteFromDashboard() {
    let deleteButton = document.querySelectorAll('.trash');
    deleteButton.forEach(element => {
        element.addEventListener('click', () => {
            let x = element.parentElement.firstChild.textContent;
            myToDoList.splice(Number(x), 1);

            myToDoList.forEach(e => {
                e.listNum = myToDoList.indexOf(e);
                console.log(e.listNum)
            });

            element.parentElement.parentElement.remove();
            removeChildren();
            addTaskToDashboard(myToDoList);
            saveToLocalStorage();
            deleteFromDashboard();
        });
    });
};