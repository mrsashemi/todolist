import { myToDoList, render } from "./index";
import { displayHome } from "./UI";

//Create a function that enables task title searching
export function searchBar() {
    const searchInput = document.querySelector("[data-search]");

    
    searchInput.addEventListener("input", (e) => {
        const value = e.target.value.toUpperCase();
        const sectionTitle = document.querySelector(".sectionTitle");

        sectionTitle.textContent = "Search";

        //For Each task title in the array, check to see if it includes the search input
        myToDoList.forEach(task => {
            const isVisible = task.title.toUpperCase().includes(value);
            //Simulate a toggle feature by rendering the task array filtered for the input
            return (isVisible) ? render(myToDoList.filter(el => el.title.toUpperCase().includes(value))) : null;
        })
        displayHome();
    })
}

searchBar();