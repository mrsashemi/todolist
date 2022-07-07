import { myToDoList, render } from "./index";
import { format } from "date-fns";
import { displayHome } from "./UI";

//Cache Dom
let notify = document.querySelector(".notify")
let notifyPopUp = document.querySelector(".notifyPopUp");
let displayN = document.querySelector(".displayNotifications")
let sectionTitle = document.querySelector(".sectionTitle");

//Create a function that displays and closes the notification dropdown
export function displayNotificationForm() {
    notify.addEventListener('click', () => {
            notifyPopUp.style.display = "block";

            populateNotifications();
            checkForNotifications();

            document.addEventListener('click', (e) => {
                let isClickInside = notifyPopUp.contains(e.target);
                let exceptAddButton = notify.contains(e.target);

                notify.className = "nullify"

                //clear the pop up when clicking outside of it
                if (!isClickInside && !exceptAddButton) {
                    notifyPopUp.style.display = "none";
                    notify.className = "notify"
                };
            });
    });
};

displayNotificationForm();

//Create a function that populates the notification form
export function populateNotifications() {
    let today = format(new Date(), "yyyy-MM-dd");
    let yesterList = [];

    //clear notify each time to prevent duplicates
    while (displayN.firstChild) {
        displayN.removeChild(displayN.firstChild);
    };

        for (let i = 0; i < myToDoList.length; i++) {
            //NOTE: for some reason format/date-fns is displaying the day before when formatting
            let checkDate = format(new Date(myToDoList[i].date), "yyyy-MM-dd");

            if (today === checkDate && myToDoList[i].remind === true) {
                yesterList.push(myToDoList[i]);
            }
        }

        console.log(today);

    yesterList.forEach(element => {
        let taskTitle = document.createElement('li');
        taskTitle.textContent = element.title;
        taskTitle.className = "dueSoon"

        displayN.appendChild(taskTitle);

        taskTitle.addEventListener("click", () => {
            sectionTitle.textContent = `${element.title} is Due Tomorrow`
            let selectedTask = [element];
            render(selectedTask);
            displayHome();
        })
    })
}


//Create a function that highlights 
export function checkForNotifications() {
    console.log(displayN.childNodes.length)
    if (displayN.childNodes.length > 0) {
        notify.style["box-shadow"] = "0 0 2vmin 0.25vmin red";
    } else {
        notify.style["box-shadow"] = "";
    }
}
