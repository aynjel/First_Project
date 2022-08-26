function revealSection() {
  var reveals = document.querySelectorAll(".revealSection");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", revealSection);

var open = document.querySelector('.btn-open');
var modal = document.querySelector('.modal-container');
var close = document.querySelector('.btn-close');

open.addEventListener('click', function(){
    modal.classList.add('show');
});

close.addEventListener('click', function(){
    modal.classList.remove('show');
});

var theme = document.querySelector(".dark-light");
var card = document.querySelector(".card");
var im = document.querySelector(".prof-img");
var btn = document.querySelector('.btn');

theme.addEventListener('click', function(){
  theme.classList.toggle('active');
  document.body.classList.toggle('dark-mode');
  card.classList.toggle('dark-card');
  im.classList.toggle('prof-img-dark');
  btn.classList.toggle('btn-dark');
});

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