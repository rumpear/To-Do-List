export let todoData = [];

export const checkLocalStorageData = () => {
  if (!localStorage.getItem('toDo')) {
    localStorage.setItem(
      'toDo',
      JSON.stringify([
        { id: 'q2d9EvaAGJ', text: 'Finish the Todo list', isComplete: true },
        { id: 'fdcFxlgseI', text: 'Create new project', isComplete: false },
        { id: 'qXa30wDlc1', text: 'Get tasks from a team leader', isComplete: false },
        { id: 'ADvHvDUuys', text: 'Call the project manager', isComplete: false },
      ]),
    );
  }
};

export const getDataFromLocalStorage = () => {
  if (localStorage.getItem('toDo')) {
    return (todoData = JSON.parse(localStorage.getItem('toDo')));
  }
};

export const setDataToLocalStorage = todoData => {
  localStorage.setItem('toDo', JSON.stringify(todoData));
};

export const removeDataFromLocalStorage = todoId => {
  if (!localStorage.getItem('toDo')) return;
  getDataFromLocalStorage();

  const filteredData = todoData.filter(item => item.id !== todoId);
  setDataToLocalStorage(filteredData);
};
