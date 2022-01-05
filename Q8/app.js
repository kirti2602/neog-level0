let button = document.getElementById("btn")
let URL = "https://unitube-server.herokuapp.com/playlists";

button.addEventListener("click", ()=> {
    fetch(URL)
    .then(response => {
        if(response.status == 401){
        document.body.append(response.statusText)
        }
    })
})