function greeter(fn: (a: string) => void): void {
  fn("hello world");
}
function writetoconsole(str: string) {
  console.log(str);
}
greeter(writetoconsole);
