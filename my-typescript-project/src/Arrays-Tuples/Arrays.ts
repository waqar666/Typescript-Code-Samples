//Array Functions
//map
//console.log(doubled)
//Suppose you have an array of user objects and you want to create a new array with just the user IDs and names combined
interface user {
  id: number;
  firstname: string;
  lastname: string;
}
let Users: user[] = [
  { id: 1, firstname: "bob", lastname: "tam" },
  { id: 2, firstname: "sam", lastname: "kop" },
  { id: 3, firstname: "pop", lastname: "tim" },
];
console.log(Users);
let newusers = Users.map(user => ({
      id: user.id,
      fullname: `${user.firstname} ${user.lastname}`,
    }
  )
);//console.log(newusers);
//Imagine you have an API response with nested data, and you want to extract and format specific information:
interface ApiResponse{
   data:{
      users:{
         id:number,
         attributes: {
            name:string,
            age:number
         }
      }[]
   }
}
const apiresponse: ApiResponse = {
   data:
      {users:
         [
            {id:1, attributes: {name: "bob", age:23}},
            {id:2, attributes: {name: "sam", age:27}}
   ]
}}
const userinfo = apiresponse.data.users.map(user => ({
   id: user.id, name: user.attributes.name, age: user.attributes.age   
}))
console.log(userinfo)

