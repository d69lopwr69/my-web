const input = document.getElementById('input');
const addBtn = document.getElementById('add-btn');
const ul = document.getElementById('ul');

function addTask() {
    if (input.value.trim() === '') {
        alert('Add a task');
    } else {
        let li = document.createElement('li');
        li.innerHTML = input.value;
        ul.appendChild(li);
        let del = document.createElement('span');
        del.innerHTML = '<ion-icon name="trash-outline" class="delete"></ion-icon>';
        li.appendChild(del);
    }
    input.value = '';
    saveData();
}
addBtn.addEventListener('click', addTask);

ul.addEventListener('click', function (e) {
    if (e.target.tagName === "SPAN") {
        // Remove the parent element (li) when delete button is clicked
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem('data', ul.innerHTML);
}

function showData() {
    ul.innerHTML = localStorage.getItem('data');
}

showData();
