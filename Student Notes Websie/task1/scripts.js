// Function to update the current time (clock)
function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}
// To-Do List Functionality

// Function to add a task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    const taskList = document.getElementById('taskList');

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create a new list item for the task
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    // Create a delete button for the task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
        taskList.removeChild(taskItem); // Remove task on delete
    };

    // Append delete button to the task item
    taskItem.appendChild(deleteButton);

    // Append the task item to the task list
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = '';
}

// Student Notes Functionality

// Function to save a note
function saveNote() {
    const noteInput = document.getElementById('noteInput');
    const noteText = noteInput.value.trim();
    const noteList = document.getElementById('noteList');

    if (noteText === '') {
        alert('Please write something in the note!');
        return;
    }

    // Create a new div element for the note
    const noteItem = document.createElement('div');
    noteItem.classList.add('note-item');
    noteItem.textContent = noteText;

    // Create a delete button for the note
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
        noteList.removeChild(noteItem); // Remove note on delete
    };

    // Append delete button to the note item
    noteItem.appendChild(deleteButton);

    // Append the note item to the note list
    noteList.appendChild(noteItem);

    // Clear the input field
    noteInput.value = '';
}


// Function to set a reminder
function setReminder() {
    const reminderTimeInput = document.getElementById('reminder-time');
    const reminderMessageElement = document.getElementById('reminder-message');
    const reminderTime = reminderTimeInput.value;

    if (!reminderTime) {
        reminderMessageElement.textContent = "Please select a time for the reminder.";
        reminderMessageElement.style.color = "red";
        return;
    }

    // Save the reminder time in a global variable
    localStorage.setItem('reminderTime', reminderTime);
    reminderMessageElement.textContent = `Reminder set for ${reminderTime}.`;
    reminderMessageElement.style.color = "green";

    // Clear the input field
    reminderTimeInput.value = "";

    checkReminder();
}

// Function to check if the reminder time is reached
function checkReminder() {
    const reminderTime = localStorage.getItem('reminderTime');
    if (!reminderTime) return;

    const now = new Date();
    const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

    if (currentTime === reminderTime) {
        alert("Reminder! It's time!");
        localStorage.removeItem('reminderTime'); // Clear reminder after triggering
    }
}

// Update the clock every second
setInterval(updateClock, 1000);
