import { myToDoList, render } from "./index";
import { format, isThisWeek } from "date-fns";
import { removeChildren } from "./reset";


//Cache Dom
let sectionTitle = document.querySelector('.sectionTitle');
let listProjects = document.querySelector('.createdProjects');

//Create a function that displays all tasks for the current day
export function showToday() {
    let todayButton = document.querySelector('.today');
    let today = format(new Date(), "yyyy-MM-dd");

    todayButton.addEventListener('click', () => {
        let todayList = myToDoList.filter(element => element.date === today);
        sectionTitle.textContent = "Today"
        removeChildren();
        render(todayList);
        displayHome();
        listProjects.style.display = 'none';
    })
}

showToday();


//Create another function that displays all tasks for the given day
export function showWeek() {
    let weekButton = document.querySelector('.week');
    
    weekButton.addEventListener('click', () => {
        let weekList = [];
        for (let i = 0; i < myToDoList.length; i++) {
            let checkDate = new Date(myToDoList[i].date);


            if (isThisWeek(checkDate,0)) {
                weekList.push(myToDoList[i]);
            }
        }
        sectionTitle.textContent = "Weekly"
        removeChildren();
        render(weekList);
        displayHome();
        listProjects.style.display = 'none';
    });
};

showWeek();

//Create function to return to display all tasks in Home
export function displayHome() {
    let homeButton = document.querySelector('.home');

    homeButton.addEventListener('click', () => {
        sectionTitle.textContent = 'Home';
        render(myToDoList);
        listProjects.style.display = 'none';
    });
};

//Create a function that creates a project dropdown menu upon clicking the projects button
//When clicking on the dropdown, list the tasks accordingly
export function displayProjects() {
    let projectSection = document.querySelector('.projectsSection');

    projectSection.addEventListener('click', () => {
        //remove duplicate project properties
        //start by initializing a set to store unique values
        let uniqueVals = new Set();

        //filter the original myToDoList array
        let uniqueProjectList = myToDoList.filter((el) => {
            //check if the set contains the project property
            let isInSet = uniqueVals.has(el.project);
            //add project property to the set
            uniqueVals.add(el.project);
            //return the negated value
            return !isInSet;
        })

        listProjects.style.display = 'block';

        //remove children from the created dropdown to prevent duplicates if clicked again
        while (listProjects.firstChild) {
            listProjects.removeChild(listProjects.firstChild);
        };

        uniqueProjectList.forEach(element => {
            //If the project value is not empty, make a new project element from the project value;
            if (element.project !== '') {
                let newProject = document.createElement('li');
                newProject.textContent = element.project;
                listProjects.appendChild(newProject)
            };
        });

        let projectButtons = Array.from(listProjects.children);

        //Turn each project from the dropdown into it's own button 
        projectButtons.forEach(button => {
            button.addEventListener('click', () => {
                let selectedProjectList = myToDoList.filter(element => element.project == button.textContent);
                sectionTitle.textContent = button.textContent;
                removeChildren();
                render(selectedProjectList);
            })
        })

        displayHome();
    });
};

displayProjects();