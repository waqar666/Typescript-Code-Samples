//simple casting
// Using angle-bracket syntax
let somevalue: any = "this is a string"
let somevaluelength = (<string>somevalue).length; //console.log(somevaluelength)

//Simple Function Casting
const add = (a:number, b:number):number => a+b
const typeadd = add as ((x:number, y:number) => number )
//console.log(typeadd(2,3))
//Casting with Interfaces
interface Addtocart{    (item: string, quantity: number):void }
interface Calculatetotal{():number}
interface Applydiscount{(discount:string):void}
let cart: {item:string, quantity:number}[]=[]
let addtocart = ((item: string, quantity:number) => {
    cart.push({item, quantity}); console.log('items added to cart ' + item + ' ' + 'quantity ' + quantity )
}) as Addtocart
addtocart("shirts", 12); console.log(cart.length)
let calculatetotal = (() => {
    let totalcost = cart.reduce((acc, curr) => acc + curr.quantity*12,0)
    console.log(totalcost)
}) as Calculatetotal
calculatetotal()
let applydiscount = ((discountcode: string) => {
    console.log('discount applied1' + discountcode)
}) as Applydiscount
applydiscount("winter sale")

