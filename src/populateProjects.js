import changeHeader from './changeHeader';

function populateProjects() {
  const tempParent = document.getElementById('newProjects');

  const list = JSON.parse(localStorage.getItem('list'));
  if (list === null) { console.log('list null'); } else {
    // clear out list first//
    while (tempParent.firstChild) {
      tempParent.removeChild(tempParent.firstChild);
    }
    //
    console.log('cleared');
    const hashTable = {};
    console.log(hashTable);
    for (let i = 0; i < list.length; i += 1) {
      if (hashTable[list[i].project] === list[i].project) { console.log('null'); } else { hashTable[list[i].project] = list[i].project; }
    }
    console.log(hashTable);

    for (const key in hashTable) {
      const textContent = hashTable[key];
      if (textContent === 'todoList') { console.log('ignored'); } else {
        const newProject = document.createElement('div');
        newProject.setAttribute('class', 'projectContBtn');
        newProject.innerText = `${textContent}`;
        tempParent.appendChild(newProject);
        newProject.addEventListener('click', () => { changeHeader(textContent); });
      }
    }
  }
}

export default populateProjects;
