
//username program


window.addEventListener('load', () => {
    todos = JSON.parse(localStorage.getItem('todos'))|| [];
    const nameInput = document.querySelector('#name')
    const newToDoForm = document.querySelector('#newToDoForm');
    const username = localStorage.getItem('username') || '';

    nameInput.value = username;

    nameInput.addEventListener('change', (e) => {
        localStorage.setItem('username', e.target.value);
    })
// create to do list array
    newToDoForm.addEventListener('submit', e => {
        e.preventDefault();
        
        
        const toDo = {
            content: e.target.elements.content.value,
            done: false,
        }

        todos.push(toDo);
        localStorage.setItem('todos', JSON.stringify(todos));
        e.target.reset();
        displayToDos();
    })
    displayToDos();
})
// Create a new list item
function displayToDos () {
    const toDoList = document.querySelector('#toDoList');
    toDoList.innerHTML = '';
    todos.forEach(toDo => {
        const toDoItem = document.createElement('div');
        toDoItem.classList.add('toDoItem');

        const label = document.createElement('div');
        const input = document.createElement('input');
        const span = document.createElement('span');
        const content = document.createElement('div');
        const actions = document.createElement('div');
        const edit = document.createElement('button');
        const deleteButton = document.createElement('button');

        input.type = 'checkbox';
        input.checked = toDo.done;
        span.classList.add('bubble');
        content.classList.add('toDoContent');
        actions.classList.add('actions');
        edit.classList.add('edit');
        deleteButton.classList.add('delete');
        content.innerHTML = `<input type="text" value="${toDo.content}"readonly>`;
        edit.innerHTML = 'Edit';
        deleteButton.innerHTML = 'Delete';

        label.appendChild(input);
        label.appendChild(span);
        actions.appendChild(edit);
        actions.appendChild(deleteButton);
        toDoItem.appendChild(label);
        toDoItem.appendChild(content);
        toDoItem.appendChild(actions);

        toDoList.appendChild(toDoItem);

//toggle done classlist for finished item
     
        function finishedToDoList() {
            
            document.getElementsByClassName("toDoContent").classList.toggle("done");
            
        };
  
        span.addEventListener('click', () => {
            finishedToDoList();
        });

//filter items by Status
//filter items by done
// const doneFilter = document.getElementById("doneFilter");
// doneFilter.addEventListener("click", () => {
// const doneList = document.querySelector("done");
// displayToDos(doneList);
// })
// //filter items by undone
// const needToDoFilter = document.getElementById("needToDoFilter");
// needToDoFilter.addEventListener("click", () => {
// const notDoneList = todos - doneList;
// displayToDos(notDoneList);
// })










//edit and delete buttons
        edit.addEventListener('click', (e) => {
            const input =content.querySelector('input');
            input.removeAttribute('readonly');
            input.focus();
            input.addEventListener('blur', (e) => {
                input.setAttribute('readonly', true);
                toDo.content = e.target.value;
                localStorage.setItem('todos', JSON.stringify(todos));
                displayToDos();
            })
        })
        deleteButton.addEventListener('click', (e) => {
            todos = todos.filter(t => t != toDo);
            localStorage.setItem('todos', JSON.stringify(todos));
            displayToDos();
        })
    })
}