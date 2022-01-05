// //2 inputs
// // 2 buttons - disables untill number
// // +, - = result displayed

// let inputs = document.getElementsByClassName("input")
// let btn = document.getElementsByClassName("btn");

// for(let i = 0; i<inputs.length; i++){
//     inputs[i].addEventListener("input", ()=>{
//         let val1 = inputs[0].value;
//         let val2 = inputs[1].value;

//         if(typeof (parseInt(val1))  === "number"  && typeof parseInt(val2) === "number"){
//             btn[0].removeAttribute("disabled")
//             btn[1].removeAttribute("disabled")
//         }
//     })
// }

// for(let i = 0; i<btn.length; i++){
//     btn[i].addEventListener("click", ()=>{
//         let val1 = parseInt(inputs[0].value);
//         let val2 = parseInt(inputs[1].value);

//         if(btn[i].textContent == "+"){
//             output.innerText = val1 + val2;        }
//             else{ 
//                     output.innerText = val1 - val2;      
//             }
//     })
// }


















let btn = document.getElementById("btn")
let output = document.getElementById("output")

let URL = "https://jsonplaceholder.typicode.com/todos";

btn.addEventListener("click", ()=>{
    fetch(URL)
    .then(resp => resp.json())
    .then(data => {
        for(let i = 0; i < data.length; i++){
        output.innerHTML += ` <li style = "text-transform: uppercase;"> ${data[i].title} </li>`
        }
    })
})
