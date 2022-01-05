let input = document.getElementById("input");
let btn = document.getElementById("btn");
let output = document.getElementById("output");


input.addEventListener("input", ()=>{
    let inputValue = input.value;
    output.innerText = inputValue;
})

btn.addEventListener("click", ()=>{
    let inputValue = input.value;
    output.innerText = inputValue.replaceAll("dog", "monkey");
})