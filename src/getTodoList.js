import {
  isBefore, parseISO, lightFormat,
} from 'date-fns';



function getTodoList() {
  const list = JSON.parse(localStorage.getItem('list'));
  const renderBox = document.getElementById('renderBox');

  renderBox.innerHTML = '';

  if (list === null) { return; }

  for (let i = 0; i < list.length; i += 1) {
    if (list[i].project === window.headerPointer
      && isBefore(parseISO(list[i].dueDate), window.dateToCompare)) {
      const { id } = list[i];
      const { name } = list[i];
      const { dueDate } = list[i];
      const { priority } = list[i];
      const { project } = list[i];
      const { description } = list[i];

      renderBox.innerHTML += `
    <div class="todoInList">
    Name:${name}   
    <br>Due Date:${lightFormat(parseISO(dueDate), 'MM-dd-yyyy')}
    
    Priority:${priority}
    
    Project:${project}
   
    Description:${description}
    <div class="delete" id="${id}">delete</div>
    </div>`;
    }
  }

  function deleteFxn() {
    //    if (confirm('Are you sure you want to delete this task?')){
    const list = JSON.parse(localStorage.getItem('list'));
    for (let i = 0; i < list.length; i += 1) {
      if (this.getAttribute('id') === list[i].id) {
        list.splice(i, 1);
        localStorage.setItem('list', JSON.stringify(list));
      }
    }
    getTodoList();
    // }
    // else {console.log('not confirmed')}
  }

  const deleteList = document.getElementsByClassName('delete');

  for (let i = 0; i < deleteList.length; i += 1) {
    deleteList[i].addEventListener('click', deleteFxn);
  }
}

export { getTodoList };
