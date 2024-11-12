//Type Guards

//typeof
function getLength(input: string | number): number {
  if (typeof input === "string") {
    return input.length;
  } else {
    return input;
  }
}
let _length: number = getLength("hello");
console.log(_length);

//instanceof
class dog {
  public bark(): void {
    console.log("dog barking");
  }
}
class cat {
  public meow(): void {
    console.log("cat is meowing");
  }
}
/**
 * Makes the given animal make a sound.
 * @param animal - The animal that will make a sound.
 */
function makesound(animal: dog | cat) {
  if (animal instanceof dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}
makesound(new dog());

//Discriminated Unions
type Shape =
  | { Kind: "circle"; radius: number }
  | { Kind: "square"; length: number }
  | { Kind: "rectangle"; length: number; breath: number };
/**
 * Calculates the size of a given shape.
 * 
 * @param shape - An object representing a shape, which can be a circle, square, or rectangle.
 *   - For a circle, provide the radius.
 *   - For a square, provide the length of a side.
 *   - For a rectangle, provide the length and breadth.
 * @returns The calculated size of the shape based on its type.
 */
function GetSize(shape: Shape): number {
  switch (shape.Kind) {
    case "circle":
      return Math.PI ** shape.radius;
      break;
    case "square":
      return shape.length ** 2;
      break;
    case "rectangle":
      return shape.length ** shape.breath;
  }
}

let _shape: Shape = { Kind: "circle", radius: 20 };
let _size: number = GetSize(_shape);
console.log(_size);

//Discriminated Unions using functions
type success = { status: "success"; data: string };
type error = { status: "error"; message: string };
type response = success | error;
/**
 * Handles a response from an API call.
 * @param response - An object representing the API call result. It can be a success or an error.
 *   - If the status is "error", then the object will contain a message describing the error.
 *   - If the status is "success", then the object will contain the data returned from the API.
 */
function HandleResponse(response: response) {
  if (response.status === "error") {
    console.log(`Error: ${response.message}`);
  } else {
    if (response.status === "success") {
      console.log(`Data: ${response.data}`);
    }
  }
}
const successresponse: response = {
  status: "success",
  data: "got data from api",
};
const errorresponse: response = { status: "error", message: "error returned" };
HandleResponse(successresponse);
HandleResponse(errorresponse);
