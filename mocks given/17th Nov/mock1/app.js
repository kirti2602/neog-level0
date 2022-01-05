let username = document.getElementById("name")
let password = document.getElementById("password")
let btn = document.getElementById("btn")

password.addEventListener("input", ()=>{
    let inputVal = password.value;
    if(inputVal.length >= 10 && inputVal.length <= 15){
        btn.removeAttribute("disabled")
    }
    else{
        btn.setAttribute("disabled", "disabled")
    }
})

btn.addEventListener("click", ()=>{
    let nameVal = username.value;
    let inputVal = password.value;

    if(inputVal.includes(nameVal)){
        password.style.borderColor = "red";
    }
    else{
        password.style.borderColor = "green";
    }
})

