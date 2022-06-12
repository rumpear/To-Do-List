import {
  getDataFromLocalStorage,
  setDataToLocalStorage,
  todoData,
} from '../utils/localStorageActions';
import { renderTodo } from '../render/renderTodo';

export const saveTodo = (id, newValue) => {
  getDataFromLocalStorage();

  todoData.forEach(item => {
    if (item.id === id) {
      item.text = newValue;
    }
  });

  setDataToLocalStorage(todoData);
  renderTodo();
};
