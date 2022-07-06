import { saveToLocalStorage, myToDoList, renderDashboard, render } from "./index";
import { checkForNotifications } from "./notifications";

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
