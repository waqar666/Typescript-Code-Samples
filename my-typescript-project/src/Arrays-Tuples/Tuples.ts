
//WORKING WITH ARRAYS AND TUPLES
//// Defining a tuple for a coordinate point
let point : [number, number] = [5,10]
//console.log(point[0])
//real world project management system
type Tasktype = 'feature' | 'bug' | 'documentation'
type priority = 'high' | 'low' | 'medium'
type Task = [string, Tasktype, priority, Date, string]
let task1: Task = ['Implement login feature', "feature", "high", new Date('2024-11-25'), 'Alice'];
let task2: Task = ['Fix login bug', "bug", "high", new Date('2024-11-22'), 'Bob'];
let task3: Task = ['Write API documentation', "documentation", "medium", new Date('2024-11-30'), 'Eve'];
const addtask = (tasks:Task[], task:Task ): Task[] => {
    return [...tasks, task]
}
const gethighprioritytasks = (tasks: Task[]):Task[] =>{
    return tasks.filter(([,,priority]) => priority === 'high')
}
let tasks:Task[]=[]
tasks = addtask([...tasks],task1); tasks = addtask([...tasks], task2); tasks=addtask([...tasks],task3)
let highprioritytasks = gethighprioritytasks(tasks)
//console.log(highprioritytasks)
const gettasksduebefore = (tasks: Task[]):Task[] => {
    return tasks.filter(([,,,duedate]) => {
        duedate < new Date('2024-11-25')
    })
}
let tasksbeforeduedate = gettasksduebefore(tasks); // console.log(tasksbeforeduedate)

type task1 = [string, "feature"|"Bug"|"Documentation", "high"|"low"|"medium", Date, string]
let  tasks1: task1[] = [
["login feature", "feature", "high", new Date('2024/11/25'), "bob"],
 ["login bug", "Bug", "high", new Date('2024/11/12'), "alice"],
 ["api documentation ", "Documentation", "medium", new Date('2024/11/28'), "sam"]
]
//// Function to get task titles and assignees using map
function gettitlesandassignees(tasks1:task1[]):[string,string][] {
   return tasks1.map(([Title,,,,Assignee]) =>  [Title, Assignee])
}
//// Function to remove a task by index using splice
function removetaskbyindex(tasks1:task1[], index:number):task1[]{
    let splicedtasks = [...tasks1].splice(index,1);
    return splicedtasks 
}
//function to return the modified array after removing index element using slice
function getmodifiedarrayafterremovingindexelement(tasks1: task1[], index:number):task1[]{
    let slicedarray = [...tasks1.slice(0,index), ...tasks1.slice(index+1)]
    return slicedarray
}
let sliceddtasks  = getmodifiedarrayafterremovingindexelement(tasks1,1)
console.log('sliced array------' + sliceddtasks)
let updatedtasks  = removetaskbyindex(tasks1,2)
console.log('updated array-------' + updatedtasks)
let titlesandassignees  = gettitlesandassignees(tasks1)
console.log('titles and assignee array------' + titlesandassignees)