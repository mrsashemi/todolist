# todolist

Created as a part of the Odin Project curriculum

**Introduction**
The goal of this project of this to-do list project is to get some final practice wit object oriented programming before moving onto learning about other aspects of Javascript (asynch, react, node, etc). I primarily created this project using various ES6 Modules, object constructors, and various array methods. As an added bonus, I had a bit of fun with CSS creating my own icons as opposed to uploading images. 

**Functionality** 
This page is actually based off two of my previous projects, the admin dashboard and the library project. Functionally, it operates as a combination of the two. There are a handful of components that are currently functional with more coming in the future. Currently, you can upload tasks via a pop-up form ("New" Button). The form imports the inputs into a task object constructor, and then renders it into a DIV card. 

 For each DIV task card, you can edit the title, the notes, set a 24hr reminder, mark it complete, change the date, add it to a project, or delete the task. Each of these component are set on the object upon submitting the form, and can be edited directly on the card itself, which will also edit the object. 

 In addition, there are a few tabs that can sort the tasks. You can sort by the present day, the week, and by project. In addition cards can be searched, and there is a notification bell which notifies the user of any tasks due 24hrs in advance if a reminder is set.

 It's a pretty straight forward task manager.

 **Process**
 Since I based this project off one off of the admin dashboard project and the library project, I started by refactoring the code into something that looks more like a task manager. I started by adjusting the UI from the dashboard project accordingly, and then refactored the library projects javascript into something that could help me sort DIV tasks.

 Once I got the two initial components working together, I began to build out all the features in the following order:

00) configure webpack
 0) Build out index.js from the library project and refactor into seperate modules
 1) Use index.js to hold the object array, save to local storage, and rendering logic
 2) Create tasks.js to hold the object constructor, and two functions that add to array and render to the DOM
 3) Create forms.js to hold the form which submits values to the constructor function
 4) Create toggle.js & reset.js to build out initial toggling for specific features (completed task, reminder, date change w/ date-fns, and delete functions)
 5) Create UI.js for the tab switching logic, each tab uses various array methods to filter the object array and rerenders it to the DOM. Note: each added project creates a new tab to display sorted lists.
 6) Debug the delete and toggling modules
 7) Create search.js to search through the object arrays and render to dashboard
 8) Create notifications.js to display task reminders as a small notifications popup using similar logic as the forms
 9) Return to toggle.js to build out final editing logic for changing the task title, notes, and project 
10) Debug delete functions by updating list filtering logic (add a variable to the delete function so it can take in a sorted array as opposed to the original object array)
11) Minor UI updates

This project was a lot more fleshed out than my previous OOP projects but honestly felt easier to get through. The big thing is there was a lot of debugging whenever it came to sorting the arrays.

**Conclusion** 
I enjoyed this project very much, as it was the first time I decided to update and refactor some old projects. I intended on adding a few more features like logging in and profile editing capabilities, but I will likely keep that for a future update after I learn more of the back end! 
