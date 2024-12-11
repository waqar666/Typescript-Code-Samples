//example 1
class Person implements ObjectInstance {  name: string;  age: number; city: string
    constructor(name: string, age: number, city: string) { this.name = name; this.city=city; this.age = age;  }
    speak() {   console.log('i speak english' );} greet() {   console.log('i am human, my name is ' + this.name );  }}
class Robot implements ObjectInstance {  name: string;  age: number;
        constructor(name: string, age: number) { this.name = name;    this.age = age;  }
        speak() {   console.log('i speak Robotic' );} greet() {   console.log('i am Robot, my name is ' + this.name );  }}
  interface myObjectConstructor1{
    new (name: string, age: number, city: string): ObjectInstance
}
let ctor: myObjectConstructor1 = Person
const instance = new ctor('bob', 25, 'new york')
//instance.greet(); instance.speak();
let ctor2: myObjectConstructor1 = Robot
const instance1 = new ctor2('X.25', 5, 'cali')
//instance1.greet(); instance1.speak();
function CreateObject(ctor: myObjectConstructor1, name: string, age: number, city: string): ObjectInstance{
  return new ctor(name, age, city)
}
const person2 = CreateObject(Person, "bob", 26,"del")
//person2.greet()
interface ObjectInstance {
  name: string;  age: number;  greet: () => void;  speak: () => void }
//example 2
//Combining Call and Construct Signatures
interface callorconstruct{
  (name:string): string
  new (name: string): ObjectInstance
}
const PersonFactory: callorconstruct = function(this:ObjectInstance|undefined, name: string):ObjectInstance|string{
  if(this){
    this.name =name; this.greet = () => console.log(' object create for personfactory with name = ' + this.name)
    return this
  }
  else{
    return `hello  ${name}`
  }  
}  as callorconstruct
const person7 = new PersonFactory("anil")
person7.greet()
const greeting = PersonFactory("samuel")
console.log(greeting)