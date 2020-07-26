var list = document.getElementById("list")

function addTodo() {
    var todo_item = document.getElementById("todo-item");
    var li = document.createElement('li')
    var liText = document.createTextNode(todo_item.value)

    li.appendChild(liText)
    li.setAttribute("class", "umone")

    var delBtn = document.createElement("button")
    var delText = document.createTextNode("Delete")
    delBtn.setAttribute("class", "btn umbtn umbtn1")
    delBtn.setAttribute("onclick", "deleteItem(this)")
    delBtn.appendChild(delText)

    var editBtn = document.createElement("button")
    var editText = document.createTextNode("EDIT")
    editBtn.setAttribute("class", "btn umbtn")
    editBtn.appendChild(editText)
    editBtn.setAttribute("onclick", "editItem(this)")

    li.appendChild(delBtn)
    li.appendChild(editBtn)

    list.appendChild(li)
    todo_item.value = ""

    console.log(li)

}

function deleteItem(e) {
    e.parentNode.remove()
}

function editItem(e) {
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter Edit Value", val)

    e.parentNode.firstChild.nodeValue = editValue
}

function deleteAll() {
    list.innerHTML = ""
}