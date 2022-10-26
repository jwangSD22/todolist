//npx webpack --watch//
import './style.css';
import {getTodoList} from '/src/getTodoList.js'
import {saveTodo} from '/src/saveTodo.js'
import { endOfToday, endOfTomorrow, endOfWeek, endOfMonth, endOfYear} from 'date-fns'


window.headerPointer = 'todoList'
window.dateToCompare = new Date(5000, 12 , 31)




window.document.addEventListener('DOMContentLoaded',
function (){
    getTodoList();
    document.getElementById('taskForm').addEventListener('submit', saveTodo);
    document.getElementById('folderPointer').innerHTML = `<div>${window.headerPointer}</div>`
    document.getElementById('today').addEventListener('click', ()=>{window.dateToCompare=endOfToday();getTodoList()});
    document.getElementById('tomorrow').addEventListener('click', ()=>{window.dateToCompare=endOfTomorrow();getTodoList()});
    document.getElementById('thisWeek').addEventListener('click', ()=>{window.dateToCompare=endOfWeek(new Date());getTodoList()});
    document.getElementById('thisMonth').addEventListener('click', ()=>{window.dateToCompare=endOfMonth(new Date());getTodoList()});
    document.getElementById('thisYear').addEventListener('click', ()=>{window.dateToCompare=endOfYear(new Date());getTodoList()});

}
)
