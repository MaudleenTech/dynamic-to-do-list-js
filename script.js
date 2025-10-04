// ========================================
// STEP 1: Setup Event Listener for Page Load
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // STEP 2: Select DOM Elements
    // ========================================
    // Select the "Add Task" button
    const addButton = document.getElementById('add-task-btn');
    
    // Select the input field where users enter tasks
    const taskInput = document.getElementById('task-input');
    
    // Select the unordered list that will display tasks
    const taskList = document.getElementById('task-list');
    
    // ========================================
    // STEP 3: Create the addTask Function
    // ========================================
    function addTask() {
        // Retrieve and trim the value from the input field
        const taskText = taskInput.value.trim();
        
        // Check if taskText is empty
        if (taskText === "") {
            // Prompt user to enter a task
            alert("Please enter a task!");
            return; // Exit the function if input is empty
        }
        
        // ========================================
        // STEP 4: Task Creation and Removal
        // ========================================
        // Create a new list item (li) element
        const listItem = document.createElement('li');
        
        // Set the text content of the list item to the task text
        listItem.textContent = taskText;
        
        // Create a "Remove" button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';
        
        // Assign onclick event to remove button
        removeButton.onclick = function() {
            // Remove the list item from the task list
            taskList.removeChild(listItem);
        };
        
        // Append the remove button to the list item
        listItem.appendChild(removeButton);
        
        // Append the list item to the task list
        taskList.appendChild(listItem);
        
        // Clear the input field
        taskInput.value = "";
    }
    
    // ========================================
    // STEP 5: Attach Event Listeners
    // ========================================
    // Add event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);
    
    // Add event listener for "Enter" key press in the input field
    taskInput.addEventListener('keypress', function(event) {
        // Check if the pressed key is "Enter"
        if (event.key === 'Enter') {
            addTask();
        }
    });
});