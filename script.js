// Function to add task
function addTask(event) {
    event.preventDefault();
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== '') {
        var li = document.createElement("li");
        li.textContent = taskInput.value;
        taskList.appendChild(li);
        taskInput.value = '';

        // Add event listener to remove task when clicked
        li.addEventListener("click", function() {
            this.parentNode.removeChild(this);
        });
    }
}

// Add event listener to form submission
document.getElementById("todoForm").addEventListener("submit", addTask);
