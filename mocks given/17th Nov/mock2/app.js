// 2 input fields -btn
// SUCCESS if both are filled | FAILED if both/one is(are) empty
let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")

let button = document.getElementById("btn")
let output = document.getElementById("output")

button.addEventListener("click", ()=>{
    let val1 = input1.value;
    let val2 = input2.value;
console.log(typeof val1 , val2)
    if(val1 == "" || val2 == ""){
        output.innerText = "Please enter data in both the fields"
    }
    else{
        output.innerText = "SUCCESS"
    }

})

// input1.addEventListener("input", ()=>{
//     let val1 = input1.value;
//     let val2 = input2.value;
//     if(val1 == "" && val2 == ""){
//         output.innerText = "";
//     }
// })

input2.addEventListener("input", ()=>{
    let val1 = input2.value;
    let val2 = input2.value;
    if(val1 == "" && val2 == ""){
        output.innerText = "";
    }
})
