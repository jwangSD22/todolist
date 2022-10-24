//npx webpack --watch//
import { format, formatDistance, formatRelative, subDays, isDate } from '/node_modules/date-fns/'
import { todoTask, renderTodo, testVar,myVar} from './constructor';
import change from './testfxn';

window.todoTask = todoTask
window.testVar = testVar


//this will be in save todo module//
const Chance = require('chance');
let chance = new Chance();

//this is required in index to point to folder





console.log(myVar)
console.log(testVar)
  
console.log(todoTask)
    

console.log('hurree')

change(testVar)
console.log(testVar)
