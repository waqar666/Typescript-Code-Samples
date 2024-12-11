//A string formatter utility that uses bind for reuse across different objects.
function format(this: {prefix:string}, value:string):string{
    return `${this.prefix} is ${value}`
}
const errorformatter = format.bind({prefix:"Error"})
const infoformatter = format.bind({prefix:"Info"})
console.log(errorformatter("this not defined properly"))
//A range iterator where bind is used to ensure correct execution.
namespace RangeNamespace{
export class Range1{
    start:number; end:number;
   constructor( _start:number, _end:number){
    this.start=_start; this.end = _end
   }
   isWithinRange(this:Range1, value:number):boolean{
    if(value >= this.start && value <= this.end){
        return true
    }else{return false}
   }
}
}
const nums = [10, 30, 50, 39]
const range=new RangeNamespace.Range1(20, 100);
const withinrange = range.isWithinRange.bind(range)
const filterednumbers1 = nums.filter(withinrange)
console.log(filterednumbers1)