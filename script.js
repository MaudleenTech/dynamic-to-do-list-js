// ========================================
// STEP 1: Setup Event Listener for Page Load
// ========================================
document.addEventListener('DOMContentLoaded', function() {

    // ========================================
    // STEP 2: Select DOM Elements
    // ========================================
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // ========================================
    // STEP 3: Load Tasks from Local Storage
    // ========================================
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); 
    }

    // ========================================
    // STEP 4: Save Tasks to Local Storage
    // ========================================
    function saveTasks() {
        const tasks = [];
        document.querySelectorAll('#task-list li').forEach(li => {
            // Extract text content before the "Remove" button
            const taskText = li.firstChild.textContent.trim();
            tasks.push(taskText);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // ========================================
    // STEP 5: Create the addTask Function
    // ========================================
    function addTask(taskText = taskInput.value.trim(), save = true) {
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn');

        // Handle task removal
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
            saveTasks(); // Update Local Storage after removal
        };

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Save new task to Local Storage if needed
        if (save) saveTasks();

        taskInput.value = "";
    }

    // ========================================
    // STEP 6: Attach Event Listeners
    // ========================================
    addButton.addEventListener('click', () => addTask());

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') addTask();
    });

    // ========================================
    // STEP 7: Initialize the App
    // ========================================
    loadTasks();
});
