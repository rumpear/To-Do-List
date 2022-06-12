import Notiflix from 'notiflix';
import './js/utils/notiflixSetting';

import { form } from './js/refs';
import { createTodo } from './js/todoActions/createTodo';
import { checkLocalStorageData } from './js/utils/localStorageActions';
import { renderTodo } from './js/render/renderTodo';
import { countTasks } from './js/utils/countTasks';

checkLocalStorageData();
renderTodo();
countTasks();

const onSubmit = e => {
  e.preventDefault();
  const value = e.currentTarget.elements.input.value.trim();

  if (!value) return Notiflix.Notify.warning('Input field must not be empty');

  createTodo(value);
  renderTodo();
  form.reset();
};
form.addEventListener('submit', onSubmit);
