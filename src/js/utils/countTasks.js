import { taskCounter } from '../refs';
import { renderTodo } from '../render/renderTodo';
import { todoData } from './localStorageActions';

export const countTasks = () => {
  const unfinishedTasks = todoData.filter(item => item.isComplete === false);
  if (unfinishedTasks.length) {
    taskCounter.innerHTML = `You have ${unfinishedTasks.length} unfinished tasks`;
  }
  if (unfinishedTasks.length === 1) {
    taskCounter.innerHTML = `You have ${unfinishedTasks.length} unfinished task`;
  }
  if (unfinishedTasks.length === 0) {
    taskCounter.innerHTML = `All tasks is done!`;
  }

  renderTodo();
};
