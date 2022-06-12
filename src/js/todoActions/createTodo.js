import { countTasks } from '../utils/countTasks';
import { createId } from '../utils/createId';
import {
  getDataFromLocalStorage,
  setDataToLocalStorage,
  todoData,
} from '../utils/localStorageActions';

export const createTodo = value => {
  getDataFromLocalStorage();

  todoData.push({
    id: createId(),
    text: value,
    isComplete: false,
  });

  setDataToLocalStorage(todoData);
  countTasks();
};
