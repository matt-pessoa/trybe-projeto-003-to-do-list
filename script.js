const createTaskBtn = document.getElementById('criar-tarefa');
const removeAllBtn = document.getElementById('apaga-tudo');
const removeDoneBtn = document.getElementById('remover-finalizados');
const input = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');

function handleClickItem(event) {
  for (let item of taskList.children) {
    item.classList.remove('selected');
    item.style.background = '';

    event.target.style.background = 'rgb(128, 128, 128)';
    event.target.classList.add('selected');
  }
}

let isCompleted = false;
function handleDoubleClickItem(event) {
  if (isCompleted === false) {
    event.target.classList.add('completed');
    isCompleted = !isCompleted;
  } else {
    event.target.classList.remove('completed');
    isCompleted = !isCompleted;
  }
}

function handleAddTask() {
  const li = document.createElement('li');
  // li.classList.add('list-item');
  li.textContent = input.value;

  li.addEventListener('click', handleClickItem);
  li.addEventListener('dblclick', handleDoubleClickItem);

  taskList.appendChild(li);

  input.value = '';
}
createTaskBtn.addEventListener('click', handleAddTask);

function handleRemoveAll() {
  while (taskList.children.length !== 0) {
    // ou enquanto taskList.firstChild existir
    taskList.lastChild.remove();
  }
}
removeAllBtn.addEventListener('click', handleRemoveAll);

function handleRemoveDone() {
  const completedTasks = document.getElementsByClassName('completed');

  while (completedTasks.length !== 0) {
    for (let item of completedTasks) {
      item.remove();
    }
  }
}
removeDoneBtn.addEventListener('click', handleRemoveDone);
