//calback to handle fetched data from a url
function fetchdata(url:string, callback:(data:any)=> void):void  {
    fetch(url)
    .then(Response => Response.json())
    .then(data => {
        callback(data)
    })
    .catch((error)=>{console.error("error getting data",error)})
}
//fetchdata("https://jsonplaceholder.typicode.com/posts", (data:any) => console.log(data))
//function overloading in callbacks

function myForEach<T>(arr: T[], callback: (value:T, index?:number) => void ):void

myForEach([1,2,3], (value)=>console.log(value))
myForEach([1,2,3], (value, index)=>console.log(index?.toFixed(3)))