/*Create a web app, where I input my name,
 and then I input a password.
 If the password contains the input name in it, 
 show an error message "Password can't have name"*/

let username = document.getElementById("input")
let password = document.getElementById("password")
let loginBtn = document.getElementById("login");
let errorMsg = document.getElementById("error")

loginBtn.addEventListener("click", ()=> {
    let inputName = username.value;
    let passW = password.value;
    
    if(passW.includes(inputName)){
        errorMsg.innerText = "password can't contain !NAME!";
        errorMsg.style.color = "red"
    }
    else{
        location.reload();
    }
})


