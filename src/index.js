//npx webpack --watch//
import { format, formatDistance, formatRelative, subDays, isDate } from '/node_modules/date-fns/'


console.log('hey')


console.log(isDate(new Date()))
console.log(formatRelative(subDays(new Date(), 3), new Date()))