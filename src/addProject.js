//function for the event listener to create a DIV

import { add } from "date-fns"
import { changeHeader } from "./changeHeader"
import { getTodoList } from "./getTodoList"

export function addProject(e){

    let addProjectDiv = document.getElementById('addProject')
    let projectBox = document.createElement('div')
    projectBox.setAttribute('id','projectBox')
    projectBox.innerHTML = `
    <form><div id="projectInput"><textarea id ="projectBoxText" placeholder="my new project" cols="30"></textarea>
    <div id="addCancel">
        <div id="addBtn">add</div>
        <div id="cancelBtn">cancel</div>
    </div>
    </div>
    </form>
    `
    addProjectDiv.appendChild(projectBox)
    addProjectDiv.removeEventListener('click',addProject)
    let addBtn = document.getElementById('addBtn')
    let cancelBtn = document.getElementById('cancelBtn')
    cancelBtn.addEventListener('click',projectCancel)
    addBtn.addEventListener('click',projectAdd)

  }

    function projectCancel(){
    let parent = document.getElementById('addProject')
    let child = document.getElementById('projectBox')
    parent.removeChild(child)
    console.log('child removed')
    let addProjectDiv = document.getElementById('addProject')
    setTimeout(()=>addProjectDiv.addEventListener('click', addProject),50)
  }

    function projectAdd(){
    let projectTxt = document.getElementById('projectBoxText').value
    let newProject = document.createElement('div')
    let superParent = document.getElementById('projectContainer')
    let parent = document.getElementById('addProject')
    let child = document.getElementById('projectBox')
    let addProjectDiv = document.getElementById('addProject')
    let textContent = projectTxt

    newProject.setAttribute('class','projectContBtn')
    newProject.innerText=`${textContent}`
    parent.removeChild(child)
    superParent.insertBefore(newProject,addProjectDiv)
    newProject.addEventListener('click',()=>{changeHeader(textContent)})
    changeHeader(textContent)
    setTimeout(()=>addProjectDiv.addEventListener('click', addProject),50)
    }
