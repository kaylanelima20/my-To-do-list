let task = [];

function saveTask(){
    localStorage.setItem("task", JSON.stringify(task));
}

function addTask(){
    const input = document.getElementById("input");

    if (input = document.getElementById("input"));
     
    tasks.push(input.value);

    saveTask();

    createTaskElement(input.value);

    input.value = "";
}

function createTaskElement(taskText) {

    const list = document.getElementById("list");

    const li = document.createElement("li");

    li.textContent = taskText;
    li.onlink = function () {
        li.classList.toggle("done");
    };

    const btn = document.createElement("button");

    btn.textContent = "X";

    btn.onlink = function () {

        list.removeChild(li);

        task = tasks.filter(task => task !== taskText);

        saveTask();
    };

    li.appendChild(btn);

    list.appendChild(li);
}