// script.js

document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("start-button");
    const usernameInput = document.getElementById("username");
    const initialScreen = document.getElementById("initial-screen");
    const gameScreen = document.getElementById("game-screen");
    const currentProject = document.getElementById("current-project");
    const newProjectButton = document.getElementById("new-project-button");
    const storeButton = document.getElementById("store-button");
    const taskInput = document.getElementById("task-input");
    const addTaskButton = document.getElementById("add-task-button");
    const taskList = document.getElementById("task-list");
    const store = document.getElementById("store");
    const closeStoreButton = document.getElementById("close-store");
    const themeButtons = document.querySelectorAll(".theme-button");

    let tasks = [];

    // Function to update task list
    function updateTaskList() {
        taskList.innerHTML = "";
        tasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.textContent = task.name;
            if (task.completed) {
                li.classList.add("completed");
            }

            const completeButton = document.createElement("button");
            completeButton.textContent = "Concluir";
            completeButton.addEventListener("click", () => {
                tasks[index].completed = !tasks[index].completed;
                updateTaskList();
            });

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Excluir";
            deleteButton.addEventListener("click", () => {
                tasks.splice(index, 1);
                updateTaskList();
            });

            li.appendChild(completeButton);
            li.appendChild(deleteButton);
            taskList.appendChild(li);
        });
    }

    // Start button click event
    startButton.addEventListener("click", () => {
        const username = usernameInput.value.trim();
        if (username) {
            initialScreen.style.display = "none";
            gameScreen.style.display = "flex";
            currentProject.textContent = `Bem-vindo, ${username}`;
        } else {
            alert("Por favor, insira um nome.");
        }
    });

    // Add task button click event
    addTaskButton.addEventListener("click", () => {
        const taskName = taskInput.value.trim();
        if (taskName) {
            tasks.push({ name: taskName, completed: false });
            taskInput.value = "";
            updateTaskList();
        }
    });

    // New project button click event
    newProjectButton.addEventListener("click", () => {
        const projectName = prompt("Digite o nome do novo projeto:");
        if (projectName) {
            currentProject.textContent = projectName;
            tasks = [];
            updateTaskList();
        }
    });

    // Store button click event
    storeButton.addEventListener("click", () => {
        store.classList.add("visible");
    });

    // Close store button click event
    closeStoreButton.addEventListener("click", () => {
        store.classList.remove("visible");
    });

    // Theme buttons click event
    themeButtons.forEach(button => {
        button.addEventListener("click", () => {
            const theme = button.getAttribute("data-theme");
            document.body.className = theme;
            store.classList.remove("visible");
        });
    });
});

