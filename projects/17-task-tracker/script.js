let tasks = [];
const STORAGE_NAME = 'tasks';

document.addEventListener('DOMContentLoaded', init);

function init() {
  const form = document.querySelector('.form');
  const taskList = document.querySelector('.tasks');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const taskName = formData.get('taskName');
    if (!taskName) return;

    const newTask = {
      id: Date.now(),
      name: taskName,
      status: false,
    };
    tasks.push(newTask);
    saveTasks();
    renderTasks(taskList);
    form.reset();
  });

  renderSavedTasks(taskList);
}

function renderTasks(taskList) {
  taskList.innerHTML = '';
  const sorted = [...tasks].sort((a, b) => a.status - b.status);
  for (const task of sorted) {
    taskList.append(createTask(task, taskList));
  }
}

function createTask(task, taskList) {
  const li = createElement('li', ['task']);
  const checkbox = createElement(
    'input',
    ['task__checkbox'],
    [
      { name: 'type', value: 'checkbox' },
      { name: 'name', value: 'done' },
    ]
  );
  checkbox.checked = task.status;

  const text = createElement(
    'p',
    ['task__name', task.status && 'task__name--done'],
    [],
    task.name
  );
  const deleteBtn = createElement(
    'button',
    ['task__delete'],
    [{ name: 'type', value: 'button' }],
    '❌'
  );

  checkbox.addEventListener('change', (event) => {
    const status = event.target.checked;
    tasks = tasks.map((t) => (task.id === t.id ? { ...t, status } : t));
    saveTasks();
    renderTasks(taskList);
  });

  deleteBtn.addEventListener('click', () => {
    tasks = tasks.filter((t) => t.id !== task.id);
    saveTasks();
    renderTasks(taskList);
  });

  li.append(checkbox, text, deleteBtn);
  return li;
}

function createElement(
  tagName,
  classes = [],
  attributes = [],
  textContent = ''
) {
  const el = document.createElement(tagName);
  if (classes.length) el.classList.add(...classes.filter(Boolean));
  attributes.forEach(({ name, value }) => {
    if (value !== undefined) el.setAttribute(name, value);
  });
  if (textContent) el.textContent = textContent;
  return el;
}

function renderSavedTasks(taskList) {
  const storage = JSON.parse(localStorage.getItem(STORAGE_NAME) ?? '[]');
  if (storage.length) {
    tasks = [...storage];
  }
  renderTasks(taskList);
}

function saveTasks() {
  localStorage.setItem(STORAGE_NAME, JSON.stringify(tasks));
}
