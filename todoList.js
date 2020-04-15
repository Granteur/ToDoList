//create new list item
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("newTask").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Don't Be a Bum! Do Something Productive!");
    } else {
        document.getElementById("myList").appendChild(li);
    }
    document.getElementById("newTask").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}
/*function addItem(){
    var ul = document.getElementById("list");
    var newTask = document.getElementById("new task");
    var textus = document.createTextNode(inputValue)
    var li = document.getElementById("li");
    li.setAttribute('id', candidate.value);
    li.appendChild(document.createTextNode(candidate.value));
    ul.appendChild(li);
}

function removeItem() {
    
}*/