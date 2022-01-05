let inputPass = document.getElementById("pw");
let button = document.getElementById("btn");
let msg = document.getElementById("msg")


inputPass.addEventListener("input", () => {
    if(inputPass.value.length >= 10){
        button.removeAttribute("disabled");
        inputPass.style.borderColor = "green";
    } 
    else{
        button.setAttribute("disabled", "disabled");
        inputPass.style.borderColor = "red";
    }
})

button.addEventListener("click", () => {
    if(inputPass.value.length >= 10){
        msg.innerText = "SUCCESSFUL"
    }

    
})