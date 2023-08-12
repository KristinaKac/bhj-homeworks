localStorage = window.localStorage;

let taskArrRemove = [];

const button = document.querySelector('.tasks__add');
const input = document.getElementById('task__input');
const taskList = document.getElementById('tasks__list');
const form = document.getElementById('tasks__form');

button.addEventListener('click', addTask);
form.addEventListener('keydown', addTask);
taskList.addEventListener('click', removeTask);



function addTask(event) {

  if ((input.value.trim() != '') && ((event.key === 'Enter') || (event.button == 0))) {

    let newTask = document.createElement('div');
    newTask.className = 'task';

    let taskTitle = document.createElement('div');
    taskTitle.className = 'task__title';
    taskTitle.innerText = input.value;
    newTask.appendChild(taskTitle);

    let taskRemove = document.createElement('a');
    taskRemove.setAttribute('href', '#');
    taskRemove.className = 'task__remove';

    taskRemove.innerText = '×';
    newTask.appendChild(taskRemove);

    taskList.append(newTask);

    taskArrRemove = Array.from(document.querySelectorAll('.task__remove'));

    event.preventDefault();
  }
}

function removeTask(event) {
  let task = event.target;
  task = task.parentNode;
  task.remove();
}