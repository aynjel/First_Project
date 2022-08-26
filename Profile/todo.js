var input = document.querySelector("#input-field");
var submit = document.querySelector("#submit-field");
var deleteAll = document.querySelector("#delete-field");

var content = document.querySelector("#main-content");
content.classList.add("task");

var dateToday = document.querySelector("#date");
var today = new Date();
date.innerText = today.toDateString("en-us", "weekday: 'long'", "month: 'long'", "day: 'numeric'");

submit.addEventListener("click", function () {

    if (!input.value) {
        alert("Enter task first");
        return;
    }

    // var webTask = localStorage.getItem("localtask");
    // if(webTask == null){ 
    //     taskObj = [];
    // }else{
    //     taskObj = JSON.parse(webTask);
    // }

    // taskObj.push(task_input);
    // localStorage.setItem("localtask", JSON.stringify(taskObj));

    var taskList = document.createElement("div");
    taskList.classList.add("tasks")

    var task_input = document.createElement("input");
    task_input.classList.add("task-list-name");
    task_input.setAttribute("readonly", "readonly");
    task_input.setAttribute("id", "input-value");
    var displayValue = document.querySelector("#input-value");
    task_input.value = input.value;

    var action_btn = document.createElement("div");
    var btnDone = document.createElement("button");
    btnDone.classList.add("btn");
    btnDone.classList.add("btn-done");
    btnDone.classList.add("fa-solid");
    btnDone.classList.add("fa-check");

    var btnEdit = document.createElement("button");
    btnEdit.classList.add("btn");
    btnEdit.classList.add("btn-edit");
    btnEdit.classList.add("fa-solid");
    btnEdit.classList.add("fa-pen-to-square");

    var btnSave = document.createElement("button");
    btnSave.classList.add("btn-save");
    btnSave.classList.add("fa-solid");
    btnSave.classList.add("fa-floppy-disk");

    var btnDelete = document.createElement("button");
    btnDelete.classList.add("btn-delete");
    btnDelete.classList.add("btn");
    btnDelete.classList.add("fa-solid");
    btnDelete.classList.add("fa-trash-can");

    content.appendChild(taskList);
    taskList.appendChild(task_input);
    taskList.appendChild(action_btn);
    action_btn.appendChild(btnDone);
    action_btn.appendChild(btnEdit);
    action_btn.appendChild(btnDelete);

    var doneTaskCheck = document.createElement("p");
    doneTaskCheck.classList.add("btn-check");
    doneTaskCheck.value = "✓ ";

    btnDone.addEventListener("click", function () {
        var donePrompt = prompt("Do you confirm that this task is done?", "YES");
        if (donePrompt === "YES" || donePrompt === "yes") {
            task_input.classList.add("done-class");
            task_input.classList.remove("edit-class");
            task_input.setAttribute("readonly", "readonly");

            task_input.style.pointerEvents = "none";

            btnDone.style.pointerEvents = "none";
            btnDone.style.backgroundColor = "#98B4AA";
            btnEdit.style.pointerEvents = "none";
            btnEdit.style.backgroundColor = "#98B4AA";

            task_input.value = doneTaskCheck.value + task_input.value;
            return;
        }
    });

    btnEdit.addEventListener("click", function () {

        task_input.style.cursor = "pointer";
        task_input.removeAttribute('readonly');
        task_input.classList.add("edit-class");
        task_input.focus();
        btnEdit.style.display = "none";
        btnSave.style.display = "inline-block";
        action_btn.appendChild(btnDone);
        action_btn.appendChild(btnSave);
        action_btn.appendChild(btnDelete);
        

        btnDelete.classList.remove("cursor");
        btnDone.classList.remove("cursor");
        btnDelete.classList.add("no-cursor");
        btnDone.classList.add("no-cursor");
        btnDone.classList.add("gray-color");
        btnDelete.classList.add("gray-color");
    });

    btnSave.addEventListener("click", function () {
        task_input.style.pointerEvents = "none";
        task_input.classList.remove("edit-class");
        task_input.setAttribute("readonly", "readonly");
        btnSave.style.display = "none";
        btnEdit.style.display = "inline-block";

        btnDelete.classList.remove("no-cursor");
        btnDone.classList.remove("no-cursor");
        btnDelete.classList.add("cursor");
        btnDone.classList.add("cursor");
        btnDone.classList.remove("gray-color");
        btnDelete.classList.remove("gray-color");

        action_btn.appendChild(btnDone);
        action_btn.appendChild(btnEdit);
        action_btn.appendChild(btnDelete);
    });

    btnDelete.addEventListener("click", function () {
        var choice1 = prompt("Are you sure you want to delete this task?", "YES");
        if (choice1 == "yes" || choice1 == "YES") {
            alert("Delete Task Confirm");
            var listItem = action_btn.parentNode;
            var ul = listItem.parentNode;
            ul.removeChild(listItem);
        }
    });

    deleteAll.addEventListener("click", function () {
        removeAllChildNodes(content);
    });

    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(taskList);
        }

    }

    input.value = "";
});

// function onloada() {
//     alert("Welcome to my To Do App");
// }

// function leave() {
//     alert("leave page?");
// }