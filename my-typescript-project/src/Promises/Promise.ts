function fetchdata1(url:string):Promise<any>{
    return (
    fetch(url).then(
        Response => {
            if(!Response.ok){
                throw new Error("network error in getting data")
            }
        else{
                return Response.json()        }        }    )    )
}
fetchdata1("https://jsonplaceholder.typicode.com/posts")
.then(data => { console.log(data)})
.catch((error) => { console.error("error occured", error)} )
//Function that returns a promise
function delay(ms:number):Promise<string>{
    return new Promise((resolve,reject)=> {
        
    })
}
