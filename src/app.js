import Notiflix from 'notiflix';
// import

// * refs
const form = document.querySelector('form');
const todoList = document.querySelector('.todo-list');
// const clearTasksBtn = document.querySelector('.clear-tasks-btn');

// clearTasksBtn.addEventListener('click', () => {
//   localStorage.removeItem('toDo');
//   renderTodo();
// });

// addClearTasksBtn();

// function addClearTasksBtn() {
//   clearTasksBtn.hidden = true;
//   if (todoData.length >= 1) {
//     clearTasksBtn.hidden = true;
//   } else {
//     clearTasksBtn.hidden = false;
//   }
// }

let todoData = [];
renderTodo();

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  console.log(e);
  e.preventDefault();
  const value = e.currentTarget.elements.input.value.trim();
  const id = createId();

  if (!value) {
    Notiflix.Notify.warning('Input field must not be empty');
    return;
  }

  createData(value, id);
  renderTodo();

  form.reset();
}

// * localStorage

function checkLocalStorageData() {
  if (!localStorage.getItem('toDo')) {
    return (todoData = []);
  }
}

function returnIfLocalStorageIsEmpty() {
  if (!localStorage.getItem('toDo')) {
    return;
  }
}

function getDataFromLocalStorage() {
  if (localStorage.getItem('toDo')) {
    return (todoData = JSON.parse(localStorage.getItem('toDo')));
  }
}

function setDataToLocalStorage(arr) {
  localStorage.setItem('toDo', JSON.stringify(arr));
  console.log(arr);
}

function createId() {
  const listID = [];
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < 10; i++) {
    listID[i] = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
  }

  return listID.join('');
}

function createData(value, id) {
  checkLocalStorageData();
  getDataFromLocalStorage();

  todoData.push({
    id: id,
    text: value,
    isComplete: false,
  });

  setDataToLocalStorage(todoData);
}

function renderTodo() {
  todoList.innerHTML = '';

  if (!localStorage.getItem('toDo')) {
    return;
  }

  const todoItems = getDataFromLocalStorage();

  todoItems.reverse().forEach(({ text, isComplete, id }) => {
    createMarkup(text, isComplete, id);
  });

  // todoItems.forEach(({ text, isComplete, id }) => {
  //   createMarkup(text, isComplete, id);
  // });

  enableDeleteBtn();
  enableCheckedBtn();
  enableEditBtn();
  enableSaveBtn();
}

function removeDataFromLocalStorage(todoID) {
  returnIfLocalStorageIsEmpty();
  getDataFromLocalStorage();

  const filteredData = todoData.filter(item => item.id !== todoID);
  setDataToLocalStorage(filteredData);
}

function createMarkup(value, isComplete, id) {
  const markup = `
  <li class="todo-item ${isComplete ? 'todo-item--checked' : ''}">
    <button type="button" data-id="${id}"
      class="check-btn ${isComplete ? 'check-btn--active' : ''}">
      <i class="fas fa-solid fa-check"></i>
    </button>
					<input class="todo-text"
							type="text" 
							class="text" 
							value="${value}"
              data-id=${id}
              autocomplete="off"
							readonly/>
    <button type="button" data-id="${id}" class="edit-btn">
      <i class="fas fa-solid fa-pen"></i>
    </button>
    <button type="button" data-id="${id}" class="save-btn visually-hidden">
      <i class="fas fa-floppy-disk"></i>
    </button>
    <button type="button" data-id="${id}" class="delete-btn">
      <i class="fas fa-times btn delete-btn"></i>
    </button>
  </li>
  `;

  todoList.innerHTML += markup;
}

function enableDeleteBtn() {
  const deleteBtn = document.querySelectorAll('.delete-btn');
  deleteBtn.forEach(btn => {
    btn.addEventListener('click', deleteTodo);
  });
}

function deleteTodo(e) {
  const { id } = e.target.dataset;
  removeDataFromLocalStorage(id);
  renderTodo();
}

function enableCheckedBtn() {
  const checkedBtn = document.querySelectorAll('.check-btn');
  checkedBtn.forEach(btn => {
    btn.addEventListener('click', checkedTodo);
  });
}

function checkedTodo(e) {
  checkLocalStorageData();
  getDataFromLocalStorage();

  const { id } = e.target.dataset;

  todoData.forEach(item => {
    if (item.id === id) {
      if (item.isComplete === true) {
        item.isComplete = false;
      } else {
        item.isComplete = true;
      }
    }
  });

  setDataToLocalStorage(todoData);
  renderTodo();
}

function enableEditBtn() {
  const editBtn = document.querySelectorAll('.edit-btn');
  editBtn.forEach(btn => {
    btn.addEventListener('click', editTodo);
  });
}

function editTodo(e) {
  let newValue = '';

  const input = document.querySelectorAll('.todo-text');
  const { id } = e.target.dataset;

  input.forEach(input => {
    if (input.dataset.id === id) {
      input.removeAttribute('readonly');
      input.style.cursor = 'text';
      input.focus();
      input.selectionStart = input.value.length;

      input.addEventListener('blur', () => {
        if (!input.value) {
          Notiflix.Notify.warning('Input field must not be empty');
          renderTodo();
          return;
        }
        newValue = input.value.trim();
        saveTodo(id, newValue);
      });

      input.addEventListener('keydown', e => {
        if (e.code === 'Enter') {
          if (!input.value) {
            renderTodo();
            return;
          }
          newValue = input.value.trim();
          saveTodo(id, newValue);
        }
      });
    }
  });
}

function enableSaveBtn() {
  const saveBtn = document.querySelectorAll('.save-btn');
  saveBtn.forEach(btn => {
    btn.addEventListener('click', saveTodo);
  });
}

function saveTodo(id, newValue) {
  checkLocalStorageData();
  getDataFromLocalStorage();

  todoData.forEach(item => {
    if (item.id === id) {
      item.text = newValue;
    }
  });

  setDataToLocalStorage(todoData);
  renderTodo();
}
