import { checkTodo } from '../todoActions/checkTodo';
import { deleteTodo } from '../todoActions/deleteTodo';
import { editTodo } from '../todoActions/editTodo';
import { saveTodo } from '../todoActions/saveTodo';
import { countTasks } from './countTasks';

export const enableCheckBtn = () => {
  const checkBtn = document.querySelectorAll('.check-btn');
  checkBtn.forEach(btn => {
    btn.addEventListener('click', checkTodo);
    btn.addEventListener('click', countTasks);
  });
};

export const enableEditBtn = () => {
  const editBtn = document.querySelectorAll('.edit-btn');
  editBtn.forEach(btn => {
    btn.addEventListener('click', editTodo);
  });
};

export const enableDeleteBtn = () => {
  const deleteBtn = document.querySelectorAll('.delete-btn');
  deleteBtn.forEach(btn => {
    btn.addEventListener('click', deleteTodo);
  });
};

export const enableSaveBtn = () => {
  const saveBtn = document.querySelectorAll('.save-btn');
  saveBtn.forEach(btn => {
    btn.addEventListener('click', saveTodo);
  });
};
