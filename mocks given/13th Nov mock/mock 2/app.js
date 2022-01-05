// Fetch github profile picture and 
//display it on the webpage

let button = document.getElementById("btn");
let output = document.getElementById("output")
let URL = "https://api.github.com/users/";
let myGithub = "kirti2602";

button.addEventListener("click", ()=> {
fetch(URL+myGithub)
.then(resp => resp.json())
.then(data => {
    // let image = document.createElement("img");
    // image.setAttribute("src", data.avatar_url);
    // document.body.appendChild(image);

    output.innerHTML = `<img src= "${data.avatar_url}" height = "100">`
})

})