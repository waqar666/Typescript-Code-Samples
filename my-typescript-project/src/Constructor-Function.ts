// before es6
class Person{
    name: string
    age: number

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }
    greet() {
        console.log('hello')
    }
}
const person4 = new Person('bob', 23)
person4.greet()
