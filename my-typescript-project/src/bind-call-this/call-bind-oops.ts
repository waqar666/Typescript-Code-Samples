//Example 1: Managing this in Object-Oriented Code
//Imagine a user management system where we need to handle this while invoking object methods.
class User1{
    constructor(public name:string, public admin:boolean){}
    greet(this:User1){
        console.log(`hello ${this.name}`)
    }
    toggleuser(this:User1){
       this.admin = !this.admin
        console.log(`${this.name} is ${this.admin ? "admin": "not admin"} `)
    }
}
const user = new User1('Alice', true)
user.greet()
user.toggleuser()
const user2 = new User1("bob",false)
user.greet.call(user2)
user.toggleuser.call(user2)
const greetuser = user.greet.bind(user2)
greetuser()

// user2.greet()
// user2.toggleuser()