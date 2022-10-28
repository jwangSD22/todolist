import { changeHeader } from "./changeHeader";
import { getTodoList } from "./getTodoList"
import { populateProjects } from "./populateProjects";




export function deleteProject () {
   if (confirm('Are you sure you want to delete this project and all of its contents')){
    let list = JSON.parse(localStorage.getItem('list'))
    for(let i = list.length-1;i>=0;i--){
    if(window.headerPointer === list[i].project){
    list.splice(i,1)

    }
    }
    localStorage.setItem('list',JSON.stringify(list))
    changeHeader('todoList')
    getTodoList()
    populateProjects()
}
else {console.log('not confirmed')}
;
}


