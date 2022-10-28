// function for the event listener to create a DIV

import changeHeader from './changeHeader';

function projectCancel() {
  const parent = document.getElementById('addProject');
  const child = document.getElementById('projectBox');
  parent.removeChild(child);
  const addProjectDiv = document.getElementById('addProject');
  setTimeout(() => addProjectDiv.addEventListener('click', addProject), 50);
}

function projectAdd() {
  const projectTxt = document.getElementById('projectBoxText').value;
  const newProject = document.createElement('div');
  const tempParent = document.getElementById('newProjects');
  const parent = document.getElementById('addProject');
  const child = document.getElementById('projectBox');
  const addProjectDiv = document.getElementById('addProject');
  const textContent = projectTxt;

  newProject.setAttribute('class', 'projectContBtn');
  newProject.innerText = `${textContent}`;
  parent.removeChild(child);
  tempParent.appendChild(newProject);
  newProject.addEventListener('click', () => { changeHeader(textContent); });
  changeHeader(textContent);
  setTimeout(() => addProjectDiv.addEventListener('click', addProject), 50);
}

export default function addProject() {
  const addProjectDiv = document.getElementById('addProject');
  const projectBox = document.createElement('div');
  projectBox.setAttribute('id', 'projectBox');
  projectBox.innerHTML = `
    <form><div id="projectInput"><textarea id ="projectBoxText" placeholder="my new project" cols="30"></textarea>
    <div id="addCancel">
        <div id="addBtn">add</div>
        <div id="cancelBtn">cancel</div>
    </div>
    </div>
    </form>
    `;
  addProjectDiv.appendChild(projectBox);
  addProjectDiv.removeEventListener('click', addProject);
  const addBtn = document.getElementById('addBtn');
  const cancelBtn = document.getElementById('cancelBtn');
  cancelBtn.addEventListener('click', projectCancel);
  addBtn.addEventListener('click', projectAdd);
}
