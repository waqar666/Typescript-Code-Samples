//typescript Type Narrowing and Type Guard with generic objects
interface GenericObject<T> {
  [key: string]: T | object | address;
}
const person3: GenericObject<string> = {
  name: "bob",
  age: "22",
  address: {
    street: "maryland us",
    city: "baltimore",
  },
};
interface address {
  street: string;
  city: string;
}
//Type Guard
if (typeof person3.address === "object" && "street" in person3.address) {
  console.log(person3.address.street);
}
//Type Narrowing
console.log((person3.address as address).street);
