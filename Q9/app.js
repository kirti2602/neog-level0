// Here's an API, it can give two errors. Either 404, or 401.
// If the error is 404, show the user 'page not found' and 
// if the error is 401, show the user 'you are not logged in'.

let button = document.getElementById("btn");
let errorOutput = document.getElementById("error");
let URL = "https://jsonplaceholder.typicode.com/dummyUsers";

button.addEventListener("click", ()=> {
    fetch(URL)
    .then(response => {
        if(response.status == 404){
            errorOutput.innerText = "page not found";
        }
        
        else if(response.status == 401){
            errorOutput.innerText = "user not logged in";
        }
    })
})