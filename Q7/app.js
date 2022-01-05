let fullName = document.getElementById("input");
let btn = document.getElementById("btn");
let output = document.getElementById("showResult");

let URL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=";


btn.addEventListener("click", ()=> {
    let nameValue = fullName.value;
    fetch(URL + nameValue)
    .then(response => response.json())
    
    .then(data => {
        output.innerText = `${data.contents.translated} ${data.contents.text}`
    })
})

