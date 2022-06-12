import {
  getDataFromLocalStorage,
  setDataToLocalStorage,
  todoData,
} from '../utils/localStorageActions';
import { renderTodo } from '../render/renderTodo';

export const checkTodo = e => {
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
};
