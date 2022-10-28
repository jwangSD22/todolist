import changeHeader from './changeHeader';
import { getTodoList } from './getTodoList';
import populateProjects from './populateProjects';

export default function deleteProject() {
  if (confirm('Are you sure you want to delete this project and all of its contents?')) {
    const list = JSON.parse(localStorage.getItem('list'));
    for (let i = list.length - 1; i >= 0; i -= 1) {
      if (window.headerPointer === list[i].project) {
        list.splice(i, 1);
      }
    }
    localStorage.setItem('list', JSON.stringify(list));
    changeHeader('todoList');
    getTodoList();
    populateProjects();
  } else { console.log('not confirmed'); }
}
