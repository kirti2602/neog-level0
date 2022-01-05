

let btn = document.getElementsByClassName("btn")
let output = document.getElementById("result")
let URL  = "https://mock-practice.prakhar10v.repl.co/bollywood?name=";

for(let i = 0; i< btn.length; i++){
    btn[i].addEventListener("click", ()=>{
        fetch(URL + btn[i].textContent)
        .then(res => res.json())
        .then(data => {
            output.innerText = data.message;
        })
    })
}
