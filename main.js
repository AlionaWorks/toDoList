let todoInput = document.querySelector('.todo-input');
let todoList = [];

function addItem() {
    document.querySelector('.error').textContent = '';
    let inputValue = todoInput.value;
    let errorText = validation(inputValue);
    if (errorText == '') {
        todoList.push(inputValue.trim());
    }
    else {
        document.querySelector('.error').textContent = errorText;
    }
    printArray(todoList);
    todoInput.value = '';
}

document.querySelector('.add-button').onclick = addItem;

function enterDown(event){
    if (event.code === 'Enter'){
        addItem();
    }
}

todoInput.onkeydown = enterDown;

function createItem(itemText) {
    let listItem = document.createElement('li');
    listItem.classList.add('todo-item');

    let button = document.createElement('button');
    button.classList.add("delete-item-button");
    button.textContent = 'x';
    button.onclick = deleteItem;

    let text = document.createElement('p');
    text.classList.add('item-text');
    text.textContent = itemText;

    listItem.appendChild(text);
    listItem.appendChild(button);

    return listItem;
}

function printArray(array) {
    document.querySelector('.todo-list').innerHTML = '';
    array.forEach(element => {
        let listItem = createItem(element);
        document.querySelector('.todo-list').appendChild(listItem)
    });
}

function deleteItem(event) {
    document.querySelector('.error').textContent = '';
    let parent = event.target.parentElement;
    let itemText = parent.querySelector('.item-text').textContent;
    todoList = todoList.filter(element => {
        if (element !== itemText) {
            return true;
        }
            return false;
    }); 
    printArray(todoList);
}

function validation(text) {
    if (text.trim() === '') {
        return "Output error: empty string"
    }
    if (todoList.includes(text.trim())){
        return "The element already exists"
    }
    return '';
}

