// Dummy data
let tasks = [];

// Function to render tasks
function renderTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.innerHTML = `
            <span>${task}</span>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-warning btn-sm" onclick="editTask(${index})">Ubah</button>
                <button type="button" class="btn btn-danger btn-sm" onclick="deleteTask(${index})">Hapus</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("task");
    const taskValue = taskInput.value.trim();

    if (taskValue !== "") {
        tasks.push(taskValue);
        renderTasks();
        taskInput.value = "";
    }
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Function to edit a task
function editTask(index) {
    const newTask = prompt("Edit Task:", tasks[index]);
    
    if (newTask !== null) {
        tasks[index] = newTask.trim();
        renderTasks();
    }
}

// Initial rendering
renderTasks();
