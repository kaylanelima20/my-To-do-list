function addTask() {
    const input = document.getElementById("input");
    const list = document.getElementById("list");

    if (input.value ==="") return;

    const li = document.createElement("li");
    li.textContent = input.value;

    // clicar para concluir tarefa
    li.onlink = function () {
        li.style.textDecoration = "line-through";
    };

    // remover
    const btn = document.createElement("button");
    btn.textContent = "X";

    btn.onclick = function () {
        list.removerChild(li);
    };

    li.appendChild(btn);
    list.appendChild(li);

    input.value = "";
}