//Action delegate
type Action<T> = (input: T) => void;
let AddAction: Action<string> = (message) => console.log(message);
AddAction("hello world");
//multiparameters
type Actions<T, U> = (input1: T, input2: U) => void;
const AdditionAction: Actions<number, number> = (num1, num2) =>
  console.log(num1 + num2);
AdditionAction(4, 8);
//example using constraints
function getlonger<T extends { length: number }>(arg1: T, arg2: T): T {
  if (arg1.length > arg2.length) {
    return arg1;
  } else {
    return arg2;
  }
}
const getstringvalue: string = getlonger("hello", "typescript"); //console.log(getstringvalue)
const getarrayvalue: number[] = getlonger([1, 2, 3], [3, 4, 5, 6, 7]); //console.log(getarrayvalue)
//concat 2 arrays
function concatarrays<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.concat(arr2);
}
let stringarray = concatarrays([1, 2, 3], [6, 8]); //console.log(stringarray)
let multiarray = concatarrays<string | number>([1, 2, 3], ["hello"]); //console.log(multiarray)
//passing prdicate in generic function
function getfiltervalues<T>(arg1: T[], func: (arg: T) => boolean): T[] {
  return arg1.filter(func);
}
let filterfunction = (n: number) => n > 5;
let returnfiltervalues = getfiltervalues(
  [1, 3, 7, 9, 4, 88, 22],
  filterfunction
);
//console.log(returnfiltervalues)
//Multi-Parameter Action
type multiparameteraction<T extends any[]> = (...args: T) => void;
const logdetails: multiparameteraction<[string, number, boolean]> = (
  name,
  age,
  isactive
) => {
  console.log(`name is ${name}, age is ${age}, isactive is ${isactive}`);
};
logdetails("bob", 24, true);
//Multi-Parameter Func
type multiparameterfunction<Tinput extends any[], Toutput> = (
  ...args: Tinput
) => Toutput;
const multifunc: multiparameterfunction<[number, number], number> = (
  num1,
  num2
) => {
  return num1 + num2;
};
console.log(multifunc(3, 6));
//Multi-Parameter Predicate
type multiparameterpredicate<T extends any[]> = (...args: T) => boolean;
const isWithinRange: multiparameterpredicate<[number, number, number]> = (
  value,
  min,
  max
) => {
  return value > min && value < max;
};
console.log(isWithinRange(10, 0, 50));
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const filterednumbers = numbers.filter((value) => isWithinRange(value, 3, 7));
console.log(filterednumbers);
