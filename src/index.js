import './style.css'

//Create a to-do list array to hold the todo objects
let myToDoList = [];

//Create a factory function that generates todo objects
const toDo = function(title, notes, date, project, completed, remind, priority ) {
    return {
        title,
        notes,
        date,
        project,
        completed,
        remind,
        priority
    }
}