let tasks = [];

// Add Task
function addTask(taskName) {
    tasks.push(taskName);
    console.log("Task added:", taskName);
}

// Remove Task
function removeTask(taskName) {
    let index = tasks.indexOf(taskName);

    if (index !== -1) {
        tasks.splice(index, 1);
        console.log("Task removed:", taskName);
    } else {
        console.log("Task not found!");
    }
}

// Show All Tasks
function showTasks() {
    console.log("Your Tasks:");
    for (let i = 0; i < tasks.length; i++) {
        console.log((i + 1) + ". " + tasks[i]);
    }
}

// Testing
addTask("Study");
addTask("Exercise");
addTask("Play Games");
addTask("Eat Food");

removeTask("Exercise");

showTasks();
