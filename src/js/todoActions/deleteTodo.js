import { removeDataFromLocalStorage } from '../utils/localStorageActions';
import { renderTodo } from '../render/renderTodo';
import { countTasks } from '../utils/countTasks';

export const deleteTodo = e => {
  const { id } = e.target.dataset;
  removeDataFromLocalStorage(id);
  renderTodo();
  countTasks();
};
