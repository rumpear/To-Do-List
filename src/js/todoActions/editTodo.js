import Notiflix from 'notiflix';
import { renderTodo } from '../render/renderTodo';
import { saveTodo } from './saveTodo';

export const editTodo = e => {
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
};
