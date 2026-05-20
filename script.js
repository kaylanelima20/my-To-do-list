let tasks = [];

function saveTasks() {

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask(){
    const input = document.getElementById("input");

    if (input.value === "") return;
     
    tasks.push(input.value);

    saveTasks();

    createTaskElement(input.value);

    input.value = "";
}

function createTaskElement(taskText) {

    const list = document.getElementById("list");

    const li = document.createElement("li");

    li.textContent = taskText;
    li.onclick = function () {
        li.classList.toggle("done");
    };

    const btn = document.createElement("button");

    btn.textContent = "X";

    btn.onclick = function () {

        list.removeChild(li);

        tasks = tasks.filter(task => task !== taskText);

        saveTasks();
    };

    li.appendChild(btn);

    list.appendChild(li);
}

window.onload = function () {

    const savedTasks = localStorage. getItem("tasks");

    if (savedTasks) {

        tasks = JSON.parse(savedTasks);

        tasks.forEach(task => {
            createTaskElement(task);
        });
    }
};