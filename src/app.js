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
//   if (todoArr.length >= 1) {
//     clearTasksBtn.hidden = true;
//   } else {
//     clearTasksBtn.hidden = false;
//   }
// }

renderTodo();

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

function checkLocalStorageData() {
  if (!localStorage.getItem('toDo')) {
    return (todoArr = []);
  }
}

function returnIfLocalStorageIsEmpty() {
  if (!localStorage.getItem('toDo')) {
    return;
  }
}

function getDataFromLocalStorage() {
  if (localStorage.getItem('toDo')) {
    return (todoArr = JSON.parse(localStorage.getItem('toDo')));
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

  return (id = listID.join(''));
}

function createData(value) {
  checkLocalStorageData();
  getDataFromLocalStorage();

  todoArr.push({
    id: createId(),
    text: value,
    isComplete: false,
  });

  setDataToLocalStorage(todoArr);
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
}

function removeDataFromLocalStorage(todoID) {
  // if (!localStorage.getItem('toDo')) {
  //   return;
  // }
  // returnIfLocalStorageIsEmpty();

  getDataFromLocalStorage();

  const arr = todoArr.filter(item => item.id !== todoID);
  console.log(arr);

  // const indexOfTodo = todoArr.map(item => {
  //   console.log(item.id);
  //   // item.indexOf(todoID);
  // });
  // indexOf(todoID);
  // console.log(indexOfTodo);
  // todoArr.splice(indexOfTodo, 1);

  setDataToLocalStorage(arr);
}

function createMarkup(value, isComplete, id) {
  const markup = `
  <li class="todo-item ${isComplete ? 'todo-item--checked' : ''}">
    <button type="button" value="${id}" 
    class="check-btn ${isComplete ? 'check-btn--active' : ''}">
      <i class="fas fa-solid fa-check"></i>
    </button>
      <span class="todo-text">${value}</span>
    <button type="button" value="${id}" class="delete-btn">
      <i class="fas fa-times btn delete-btn"></i>
    </button>
  </li>
  `;

  todoList.innerHTML += markup;
}

function enableDeleteBtn() {
  const deleteBtn = document.querySelectorAll('.delete-btn');
  deleteBtn.forEach(btn => {
    btn.addEventListener('click', e => {
      deleteTodo(e.target.value);
    });
  });
}

function deleteTodo(ID) {
  removeDataFromLocalStorage(ID);
  renderTodo();
}

function enableCheckedBtn() {
  const checkedBtn = document.querySelectorAll('.check-btn');
  checkedBtn.forEach(btn => {
    btn.addEventListener('click', e => {
      checkedTodo(e.target.value);
    });
  });
}

function checkedTodo(ID) {
  checkLocalStorageData();
  getDataFromLocalStorage();

  todoArr.forEach(item => {
    if (item.id === ID) {
      if (item.isComplete === true) {
        item.isComplete = false;
      } else {
        item.isComplete = true;
      }
    }
  });

  // todoArr.map(({ id, isComplete }) => {
  //   // console.log(id, isComplete, btnId);
  //   console.log(id === ID);
  //   if (id === btnId) {
  //     if (isComplete === true) {
  //       isComplete = false;
  //       console.log(isComplete);
  //     } else {
  //       isComplete = true;
  //     }
  //   }
  // });
  setDataToLocalStorage(todoArr);
  renderTodo();
}
