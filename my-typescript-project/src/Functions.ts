// Call Signature
type describablefunction = {
    description: string;
    (somearg: number): boolean;
  };
  function a(a: number): boolean {
    return a > 3;
  }
  a.description = "default implementation";
  function myfunc(fn: describablefunction): void {
    console.log("function description is" + fn.description + " returned" + fn(6));
  }
  myfunc(a);  

function greeter(fn: (a: string) => void): void {
  fn("hello world");
}
function writetoconsole(str: string) {
  console.log(str);
}
greeter(writetoconsole);

