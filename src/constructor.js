class todoTask {
    constructor (name,dueDate,priority,project,description){
    this.name = name
    this.dueDate = dueDate
    this.priority = priority
    this.project = project
    this.description = description
    }  
}

function renderTodo() {
    let todoList = JSON.parse(localStorage.getItem('todoList'));
    }

    let testVar = 'todoList';
    let myVar = 'banj';

    export{
        todoTask, renderTodo, testVar, myVar
    }