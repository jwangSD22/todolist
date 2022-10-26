import { isBefore, parseISO, lightFormat , endOfYesterday} from 'date-fns'
import { deleteFxn } from './deleteFxn';


function getTodoList(){
    var list = JSON.parse(localStorage.getItem('list'))
    var renderBox = document.getElementById('renderBox');

    


    renderBox.innerHTML = '';

    if (list === null){return}
    else{
    for (var i = 0; i< list.length; i++){
        if(list[i].project===window.headerPointer&&isBefore(parseISO(list[i].dueDate),window.dateToCompare)){
        let id = list[i].id;
        let name = list[i].name;
        let dueDate = list[i].dueDate;
        let priority = list[i].priority;
        let project = list[i].project;
        let description = list[i].description;
    

    renderBox.innerHTML += `
    <div class="todoInList">
    Name:${name}   
    <br>Due Date:${lightFormat(parseISO(dueDate),'MM-dd-yyyy')}
    
    Priority:${priority}
    
    Project:${project}
   
    Description:${description}
    <div class="delete" id="${id}">delete</div>
    </div>`
    }
    }
}

let deleteList = document.getElementsByClassName('delete')

for (let i=0;i<deleteList.length;i++)
{
    deleteList[i].addEventListener('click',deleteFxn)
}

}

export {getTodoList}