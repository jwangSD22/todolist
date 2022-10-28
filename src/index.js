// npx webpack --watch//
import './style.css';
import {
  endOfToday, endOfTomorrow, endOfWeek, endOfMonth, endOfYear, maxTime,
} from 'date-fns';
import { getTodoList } from './getTodoList';
import { saveTodo } from './saveTodo';
import addProject from './addProject';
import changeHeader from './changeHeader';
import deleteProject from './deleteProject';
import populateProjects from './populateProjects';

window.headerPointer = 'todoList';
window.dateToCompare = new Date(5000, 12, 31);

window.document.addEventListener(
  'DOMContentLoaded',
  () => {
    populateProjects();
    getTodoList();
    document.getElementById('taskForm').addEventListener('submit', saveTodo);
    document.getElementById('addProject').addEventListener('click', addProject);
    document.getElementById('deleteProject').addEventListener('click', deleteProject);
    document.getElementById('mainTodo').addEventListener('click', () => { changeHeader('todoList'); });
    document.getElementById('today').addEventListener('click', () => { window.dateToCompare = endOfToday(); getTodoList(); });
    document.getElementById('tomorrow').addEventListener('click', () => { window.dateToCompare = endOfTomorrow(); getTodoList(); });
    document.getElementById('thisWeek').addEventListener('click', () => { window.dateToCompare = endOfWeek(new Date()); getTodoList(); });
    document.getElementById('thisMonth').addEventListener('click', () => { window.dateToCompare = endOfMonth(new Date()); getTodoList(); });
    document.getElementById('thisYear').addEventListener('click', () => { window.dateToCompare = endOfYear(new Date()); getTodoList(); });
    document.getElementById('allTime').addEventListener('click', () => { window.dateToCompare = maxTime; getTodoList(); });
  },
);
