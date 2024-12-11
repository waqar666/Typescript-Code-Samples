//Use Case: A Functional Data Pipeline for Transforming and Validating Data
//This example represents a data processing pipeline that applies a series of transformations and 
//validations to various data types (e.g., strings, numbers, objects).
//// Define a generic type for a transformation function
interface TransformationFn<T>{
    (input:T): T
}
// A generic type for a validation function
interface validationfn<T>{
    (input:T):boolean
}
//transformation functions
const touppercase: TransformationFn<string> = (input:string) => input.toUpperCase()
const addTen: TransformationFn<number> = (input: number) => input + 10;
const trimWhitespace: TransformationFn<string> = (input: string) =>  input.trim();
//validation functions
const isnotnull: validationfn<string> = (input:string)=> input.length > 0
const isgreaterthanzero:validationfn<number>=(input:number)=> input > 0
// A generic function to create a pipeline of transformations
function createpipeline<T>(...funcs: Array<(input:T) => T>):(input:T)=>T{
    return (input:T):T => funcs.reduce((acc,fn) => fn(acc), input)
}
const funcs: Array<(input:string)=> string> = [touppercase, trimWhitespace]



