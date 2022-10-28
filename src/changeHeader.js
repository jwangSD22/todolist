import { getTodoList } from './getTodoList';

export default function changeHeader(e) {
  const pointer = document.getElementById('folderPointer');
  pointer.textContent = e;
  window.headerPointer = e;
  if (window.headerPointer === 'todoList') { document.getElementById('folderPointer').textContent = 'To-Do List'; }
  getTodoList();
}
