// Take user input in USD, see what API contains, 
// convert USD to INR using info from API, display output on screen.

let USD = document.getElementById("USD");
let button = document.getElementById("btn");
let output = document.getElementById("output");

let URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json";

button.addEventListener("click", ()=>{
    let usdValue = USD.value;
    fetch(URL)
    .then(res => res.json())
    .then(data => {
        output.innerText = usdValue * data.usd.inr;
    })
})