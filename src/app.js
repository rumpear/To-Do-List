// * refs
const form = document.querySelector('form');
const todoList = document.querySelector('.todo-list');

renderTodo();

// let todoArr;

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const value = e.currentTarget.elements.input.value.trim();

  if (!value) {
    alert('Введите данные');
    return;
  }

  createData(value);
  renderTodo();

  form.reset();
}

// * localStorage

function checkLocalStorageOnEmptyArr() {
  if (!localStorage.getItem('toDo')) {
    return (todoArr = []);
  }
}

function getDataFromLocalStorage() {
  if (localStorage.getItem('toDo')) {
    return (todoArr = JSON.parse(localStorage.getItem('toDo')));
  }
}

function setDataToLocalStorage(todoArr) {
  localStorage.setItem('toDo', JSON.stringify(todoArr));
}

function createId() {
  const listID = [];
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < 10; i++) {
    listID[i] = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
  }

  return (id = listID.join(''));
}

function createData(value) {
  checkLocalStorageOnEmptyArr();
  getDataFromLocalStorage();

  todoArr.push({
    id: createId(),
    text: value,
    isComplete: false,
  });

  setDataToLocalStorage(todoArr);

  // localStorage.setItem('toDo', JSON.stringify(todoArr));
}

function renderTodo() {
  todoList.innerHTML = '';

  if (!localStorage.getItem('toDo')) {
    return;
  }

  const todoItems = getDataFromLocalStorage();

  todoItems.forEach(({ text, isComplete, id }) => {
    createMarkup(text, isComplete, id);
  });

  enableDeleteBtn();
  enableCheckedBtn();
}

function removeDataFromLocalStorage(todo) {
  if (!localStorage.getItem('toDo')) {
    return;
  }

  let todoArr;
  todoArr = JSON.parse(localStorage.getItem('toDo'));

  const indexOfTodo = todoArr.indexOf(todo);
  console.log(indexOfTodo);

  todoArr.splice(indexOfTodo, 1);

  localStorage.setItem('toDo', JSON.stringify(todoArr));
}

function createMarkup(value, isComplete, id) {
  const markup = `
  <li class="todo-item ${isComplete ? 'checked' : null}">${value}
    <button type="button" value="${id}" class="check-btn">Check</button>
    <button type="button" value="${id}" class="delete-btn">Del</button>
  </li>
  `;

  todoList.innerHTML += markup;
}

function enableDeleteBtn() {
  const deleteBtn = document.querySelectorAll('.delete-btn');
  deleteBtn.forEach(btn => {
    btn.addEventListener('click', deleteTodo);
    console.log(btn.value);
  });
}

function deleteTodo(e) {
  const item = e.currentTarget;
  // const item = e.target;
  item.parentNode.remove();

  console.log(item);
  console.log(item.parentNode);
  console.log(item.parentNode.innerText);

  const textToDelete = item.parentNode.textContent.split('\n')[0];
  console.log(textToDelete);

  removeDataFromLocalStorage(textToDelete);
}

function enableCheckedBtn() {
  const checkedBtn = document.querySelectorAll('.check-btn');
  checkedBtn.forEach(btn => {
    btn.addEventListener('click', e => {
      checkedTodo(e.target.value);
    });
  });
}

function checkedTodo(btnId) {
  if (!localStorage.getItem('toDo')) {
    todoArr = [];
    console.log(todoArr);
  } else {
    todoArr = JSON.parse(localStorage.getItem('toDo'));
  }

  todoArr.map(item => {
    if (item.id === btnId) {
      if (item.isComplete === true) {
        item.isComplete = false;
      } else {
        item.isComplete = true;
      }
    }
  });

  localStorage.setItem('toDo', JSON.stringify(todoArr));

  renderTodo();
}
