let btn = document.getElementById("btn");
let URL = "https://jsonplaceholder.typicode.com/todos";

btn.addEventListener("click", ()=> {
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        for(let i = 0; i< data.length; i++){
            let ptitle = document.createElement("p");
            ptitle.innerText = `${i} ${data[i].title}`;
            

            let pcompleted = document.createElement("p");
            pcompleted.innerText = `${data[i].completed}`;
           
            
            if(pcompleted.innerText === "false"){
                ptitle.style.color = "red"
            }
            document.body.appendChild(ptitle)
            document.body.appendChild(pcompleted)
        }
    })
})