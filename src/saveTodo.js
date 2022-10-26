import { getTodoList } from '/src/getTodoList';
import {todoTask} from '/src/constructor'
import { isBefore, parseISO, endOfYesterday } from 'date-fns';


const Chance = require('chance');
let chance = new Chance();


function saveTodo(e){
    console.log(e)
    e.preventDefault();
    
    let id = chance.guid();
    let name = document.getElementById('taskName').value;
    let dueDate = document.getElementById('dueDate').value;
    let priority = document.getElementById('prioritySelect').value;
    let project = window.headerPointer
    let description = document.getElementById('description').value;
    if (dueDate===''){dueDate = new Date()}
    let todoItem = new todoTask(id,name,dueDate,priority,project,description)
console.log(dueDate)

    if(isBefore(parseISO(dueDate),endOfYesterday())){alert('Please enter a valid due date');return}

    if (localStorage.getItem('list')===null)
    {let list = [];
        list.push(todoItem);
        localStorage.setItem('list',JSON.stringify(list))
    }
    else {let list = JSON.parse(localStorage.getItem('list'))
    list.push(todoItem)
    localStorage.setItem('list',JSON.stringify(list))
    }
    getTodoList()
    document.getElementById('taskForm').reset();

    }

    export {saveTodo}