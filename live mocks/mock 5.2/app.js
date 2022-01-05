// You will enter a name as input from your app and 
// send this API a request with the name along
// with it 

let input = document.getElementById("name");
let otpGuess = document.getElementById("otp");
let button = document.getElementById("btn");
let output = document.getElementById("output")
let URL  = "https://otpgenerator.ishanjirety.repl.co/get-otp?name=";

button.addEventListener("click", ()=>{
    fetch(URL + input.value)
    .then(res => res.json())
    .then(data => {
        if(otpGuess.textContent == data.otp){
            output.innerText = "SUCCESS";
            output.style.color = "green";
            output.append(data.otp)
        }
        else{
            output.innerText = "FAILURE";
            output.style.color = "red"
            output.append(` Correct Result - ${data.otp}`)

        }
        // output.innerText = data.otp;
    })
})