import { getTodoList } from '/src/getTodoList';
import { TodoTask } from '/src/constructor';
import { isBefore, parseISO, endOfYesterday } from 'date-fns';

const Chance = require('chance');

const chance = new Chance();

function saveTodo(e) {
  e.preventDefault();

  const id = chance.guid();
  const name = document.getElementById('taskName').value;
  let dueDate = document.getElementById('dueDate').value;
  const priority = document.getElementById('prioritySelect').value;
  const project = window.headerPointer;
  const description = document.getElementById('description').value;
  if (dueDate === '') { dueDate = new Date(); }
  const todoItem = new TodoTask(id, name, dueDate, priority, project, description);

  if (isBefore(parseISO(dueDate), endOfYesterday())) { alert('Please enter a valid due date'); return; }

  if (localStorage.getItem('list') === null) {
    const list = [];
    list.push(todoItem);
    localStorage.setItem('list', JSON.stringify(list));
  } else {
    const list = JSON.parse(localStorage.getItem('list'));
    list.push(todoItem);
    localStorage.setItem('list', JSON.stringify(list));
  }
  getTodoList();
  document.getElementById('taskForm').reset();
}

export { saveTodo };
