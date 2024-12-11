//Custom Validation. A function to validate multiple fields in a form. using rest parameters
type validator = (value: any) => boolean;
const isnotempty = (value: any) =>
  value != "" && value != undefined && value != null;
const isnumber = (value: any) => typeof value === "number";
interface formfield {
  [key: string]: any;
}
const formfields: formfield = { name: "john", age: 20, email: "abc@gmail.com" };
function validateformfields(
  fields: formfield,
  ...validators: validator[]
): boolean {
  //console.log(validators)
  //console.log(Object.values(fields))
  return validators.every((validator) =>
    Object.values(fields).every((field) => validator(field))
  );
}
//console.log(validateformfields(formfields, isnotempty, isnumber))
//Aggregating User Data. A function to aggregate data from multiple sources.
interface userro {
  [key: string]: any;
  name: string;
  age: number;
  email: string;
}
const user1: userro = { name: "bob", age: 20, email: "abc@gmail.com" };
const user21: userro = { name: "alice", age: 30, email: "cde@gmail.com" };
const user22: userro = { name: "tom", age: 45, email: "dfg@kk" };
//console.log(mergeusers(user1,user21))
const uservaluesarray = mergeusers(user1, user21);
const mergedusers = mergeuserdata(user1, user21);
//console.log(mergedusers)
function mergeuserdata(...users: userro[]): userro {
  const defaultuser: userro = { name: "", age: 0, email: "" };
  return users.reduce(
    (acc, curr) => ({
      ...acc,
      ...curr,
    }),
    defaultuser
  );
}
function mergeusers(...users: userro[]): any[][] {
  users.forEach((user, index) => {
    console.log(`user ${index}`);
    console.log(Object.entries(user));
    Object.entries(user).forEach(([key, value]) => {
      console.log(`${key}:${value}`);
    });
  });

  const userValuesArray = users.map((user) => Object.values(user));
  return userValuesArray;
}
