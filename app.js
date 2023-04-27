const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('addBtn')
const todoList = document.getElementById('todo-list')

addBtn.addEventListener('click', addToDo)

function addToDo() {
    const todoText = todoInput.value;
    const listItems = document.createElement('li');
    listItems.innerHTML = todoText;
    todoList.appendChild(listItems)
    todoInput.value = "";
}