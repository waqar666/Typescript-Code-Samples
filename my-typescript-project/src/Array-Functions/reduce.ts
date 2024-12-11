interface userprofile{
    id:number, name:string, role?:string, email:string, bio?:string}
const initialProfile: userprofile = { id: 1, name: "Alice", email: "alice@example.com", role:undefined };
const updatedprofile1:userprofile = {id:1,name:'alice',role:'software dev',email:'temp@gmail.com'} 
const updatedprofile2:userprofile = {id:1,name:'alice',email:'new@gmail.com',bio:'software engineer'} 
const finalprofile = mergeprofile(initialProfile,updatedprofile1,updatedprofile2)
//console.log(finalprofile)
function mergeprofile(...profiles:userprofile[]):userprofile{
    const defaultprofile:userprofile = {
        id:0,name:'',email:''
    }
   return profiles.reduce((acc, curr)=> ({   
        ...acc, ...curr
    }),defaultprofile)
}
//// Detailed Fruit Counting Example
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const fruitcount = fruits.reduce((accumulator,currentfruit) => {
    console.log(`current fruit is ${currentfruit}`)
    console.log(`current accumulator is `, accumulator)
    accumulator[currentfruit] = (accumulator[currentfruit] || 0) + 1
   
    return accumulator
},{} )
console.log(`accumulator returned ${fruitcount}`)