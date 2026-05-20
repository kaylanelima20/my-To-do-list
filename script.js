let task = [];

function saveTask(){
    localStorage.setItem("task", JSON.stringify(task));
}

function addTask(){
    const input = document.getElementById("input");

    if (input = document.getElementById("input"));
     
    tasks.push(input.value);

    saveTask();

    creatTaskElement(input.value);

    input.value = "";
}