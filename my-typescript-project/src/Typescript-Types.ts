//typescript types

let Name: string = "henry";
let age: number = 25;
let isMarried: boolean = false;
let todaydate: Date = new Date();
let mytuple: [string, number, boolean] = ["henry", 24, true];
let empty: null = null;
let undef: undefined;
console.log(Name, age, isMarried, todaydate, mytuple, empty, undef);
const person: object = { name: "henry", age: 24 };
//interface
interface Person {
  name: string;
  age: number;
}
const person1: Person = { name: "henry", age: 22 };
console.log(person1.age, person1.name);
//Generic Object
interface IDictionary<T> {
  [key: string]: T;
}
const IntegerDictionary: IDictionary<number> = {
  1: 1000,
  2: 2000,
  3: 4000,
};
const StringDictionary: IDictionary<string> = {
  Name: "henry",
  age: "85",
  city: "baltimore",
};
console.log(IntegerDictionary[1], IntegerDictionary[2], IntegerDictionary[3]);
IntegerDictionary[1] = 3000;
console.log(IntegerDictionary[1]);
console.log(
  StringDictionary["Name"],
  StringDictionary["age"],
  StringDictionary["city"]
);
StringDictionary["Name"] = "bob";
console.log(StringDictionary["Name"]);
