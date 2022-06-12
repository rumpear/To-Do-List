import { todoList } from '../refs';

export const createMarkup = (value, isComplete, id) => {
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
};
