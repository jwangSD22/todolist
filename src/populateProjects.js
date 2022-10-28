import { changeHeader } from "./changeHeader";

export function populateProjects(){
    let tempParent = document.getElementById('newProjects')


    let list = JSON.parse(localStorage.getItem('list'))
    if (list===null){return}
    else{
        //clear out list first//
        while(tempParent.firstChild){
            tempParent.removeChild(tempParent.firstChild)
        }
        //
        console.log('cleared')
        let hashTable = {}
        console.log(hashTable)
        for(let i = 0;i<list.length;i++){
            
                if (hashTable[list[i].project]===list[i].project){}
                else{hashTable[list[i].project]=list[i].project}
            
        }
        console.log(hashTable)
        
        for(let key in hashTable){
            let textContent = hashTable[key]
            if (textContent==='todoList'){console.log('ignored')}
            else{
            let newProject = document.createElement('div')
            newProject.setAttribute('class','projectContBtn')
            newProject.innerText=`${textContent}`
            tempParent.appendChild(newProject)
            newProject.addEventListener('click',()=>{changeHeader(textContent)})
            }
        }

            
        }     
  
}


