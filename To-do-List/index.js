var addBtn = document.querySelector("#add-btn");
var input = document.querySelector("#input-text");
var container = document.querySelector("#to-do-container");

addBtn.addEventListener("click", function () {
    var displayValue = document.createElement("p");
    displayValue.innerText = input.value;


    if (input.value !== "") {

        var btnDone = document.createElement("button");
        var btnDelete = document.createElement("button");

        btnDelete.classList.add("btn-delete");
        btnDelete.innerText = "Delete";

        btnDone.classList.add("btn-edit");
        btnDone.innerText = "Done";

        container.appendChild(displayValue);
        displayValue.appendChild(btnDone);
        displayValue.appendChild(btnDelete);

        btnDone.addEventListener("click", function () {
            var ans = prompt("Is task is Done?", "YES");
            if (ans == "yes" || ans == "YES") {
                displayValue.prepend("✔ ");
                displayValue.style.fontWeight = "bold";
                displayValue.style.color = "green";
                displayValue = displayValue.value;
                btnDone.style.pointerEvents = "none";
                btnDone.style.display = "none";
            }
        });

        btnDelete.addEventListener("click", function () {
            var choice = prompt("Are you sure you want to delete this task?", "YES");
            if (choice == "yes" || choice == "YES") {
                alert("Delete Task Confirm");
                var listItem = this.parentNode;
                var ul = listItem.parentNode;
                ul.removeChild(listItem);
            }
        });


    } else {
        alert("Enter Task");

    }
    input.value = "";
});