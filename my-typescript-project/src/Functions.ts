// Call Signature
// function example 1
type describablefunction = {
    description: string;
    (somearg: number): boolean;
  };
  function a(a: number): boolean {
    return a > 3;
  }
  a.description = "default implementation";
  function myfunc(fn: describablefunction): void {
    console.log('function description is ' + ' ' + fn.description + ' ' + 'returned' + ' '  + fn(6));
  }
  myfunc(a);  
// function example 2
type desirablefunction = {
  description: string
  (value: number): boolean
}
const getresults: desirablefunction = (a) => a > 6   
getresults.description = 'function returns boolean'
console.log(getresults(6))
