var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

button.addEventListener("click", function () {
    addValueToList();
});

input.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) addValueToList();
});

ul.addEventListener("click", togleDone);

function addValueToList() {
    if (input.value.length > 0) {
        var li = document.createElement("li");
        var deleteButton = document.createElement("button");
        deleteButton.appendChild(document.createTextNode("X"));
        deleteButton.classList.add("delete");
        li.appendChild(deleteButton);
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    }
    input.focus();
};

function togleDone(event) {
    var element = event.target
    if (element.localName === "li") completeItem(element);
    if (element.localName ==="button") deleteItem(element);
};

function completeItem(element){element.classList.toggle("done")};
function deleteItem(element){element.parentNode.remove()};