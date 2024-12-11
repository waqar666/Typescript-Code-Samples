// Using Callbacks in Functional Programming
interface User2{
    name: string, admin:boolean
}
class Database{
    private users:User2[]=[
        {name:"bob", admin:true}, {name:"alice",admin:false}
    ]
    filterusers():User2[]{
        return this.users.filter( (user) => user.admin )
    }
    filterusers2(filter2: (this:User2) => boolean):User2[]{
        return this.users.filter(function(user){
            return filter2.call(user)
        })
    }
}
const db1 = new Database()
const admins1:User2[] = db1.filterusers2( function(this:User2):boolean{
        if(this == undefined){ console.error("this not set properly")}
        console.log(this)
    return this.admin
} )
console.log(admins1)