// input - red green blue
let input = document.getElementById("input")
let button = document.getElementById("btn")
let output = document.getElementById("output")

button.addEventListener("click", ()=>{
    let inputVal = input.value;
    if(inputVal.includes("red")){
        output.innerText = inputVal;
        output.style.color = "red";
    }
    else if(inputVal.includes("blue")){
        output.innerText = inputVal;
        output.style.color = "blue";
    }
    else if(inputVal.includes("green")){
        output.innerText = inputVal;
        output.style.color = "green";
    }

    output.innerText = inputVal;
})
