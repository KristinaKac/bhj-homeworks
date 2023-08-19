const list = document.getElementById('tasks__list');

const button = document.getElementById('tasks__add')

button.addEventListener('click', function name(event) {
  event.preventDefault();
  const input = document.getElementById('task__input');

  if (input.value.trim() !== '') {

    let newTask = document.createElement('div');
    newTask.className = 'task';

    let newTaskTitle = document.createElement('div');
    newTaskTitle.className = 'task__title';
    newTaskTitle.innerText = input.value;

    let newTaskLink = document.createElement('a');
    newTaskLink.setAttribute('href', '#');
    newTaskLink.className = 'task__remove';
    newTaskLink.innerText = '×';

    newTask.appendChild(newTaskTitle);
    newTask.appendChild(newTaskLink);

    list.appendChild(newTask);
    input.value = '';
  }
});
list.addEventListener('click', function name(event) {
  const selectElement = event.target;

  if (selectElement.classList.contains('task__remove')) {
    selectElement.parentNode.remove();
  }
})