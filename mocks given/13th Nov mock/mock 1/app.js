// show  data- first_name and avatar
let button = document.getElementById("btn");
let output = document.getElementById("output");
let URL = "https://reqres.in/api/users?page=2";

button.addEventListener("click", ()=> {
    fetch(URL)
    .then(response => response.json())
    .then(result => {
        let arrayAPI = result.data;
        // console.log(result.data)
        for(let i = 0; i< arrayAPI.length; i++){
        // let pFirstName = document.createElement("h1")
        // pFirstName.innerText = arrayAPI[i].first_name;
        // document.body.appendChild(pFirstName)
    
        // let imgAvatar = document.createElement("img")
        // imgAvatar.setAttribute("src", arrayAPI[i].avatar);
        // document.body.appendChild(imgAvatar)
        output.innerHTML += `<p>${arrayAPI[i].first_name}</p> 
                            <img src = "${arrayAPI[i].avatar}">`

        }
    })
})
