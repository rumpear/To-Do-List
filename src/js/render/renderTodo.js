import { todoList } from '../refs';
import { enableDeleteBtn, enableCheckBtn, enableEditBtn, enableSaveBtn } from '../utils/enableBtns';
import { getDataFromLocalStorage } from '../utils/localStorageActions';
import { createMarkup } from './createMarkup';

export const renderTodo = () => {
  todoList.innerHTML = '';

  if (!localStorage.getItem('toDo')) return;

  const todoItems = getDataFromLocalStorage();

  todoItems.reverse().forEach(({ text, isComplete, id }) => {
    createMarkup(text, isComplete, id);
  });

  enableDeleteBtn();
  enableCheckBtn();
  enableEditBtn();
  enableSaveBtn();
};
