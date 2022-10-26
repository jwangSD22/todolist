import { getTodoList } from "./getTodoList"




function deleteFxn () {
   if (confirm('Are you sure you want to delete this task?')){
    let list = JSON.parse(localStorage.getItem('list'))
    for(let i = 0;i<list.length;i++){
    if(this.getAttribute('id') === list[i].id){
    list.splice(i,1)
    localStorage.setItem('list',JSON.stringify(list))
    }
    }
    getTodoList()
}
else {console.log('not confirmed')}
}


export {deleteFxn}