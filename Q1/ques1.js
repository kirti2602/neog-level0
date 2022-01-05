let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let result = document.getElementById("result")
let buttons = document.getElementsByClassName("btn")

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(event){
    
        let numValue1 = parseInt(num1.value)
        let numValue2 = parseInt(num2.value)

        let operator = event.target.textContent

        switch(operator){
            case "+": 
            result.innerText = numValue1 + numValue2; break;
            case "-": 
            result.innerText = numValue1 - numValue2; break;
            case "x": 
            result.innerText = numValue1 * numValue2; break;
            case "/": 
            result.innerText = numValue1 / numValue2; break;
    
            default:
            result.innerText = "Invalid operation"; break;
    
        }
        // operation(numValue1, numValue2, operator)
        

    })
}

// function operation(numValue1, numValue2, operator){
//     switch(operator){
//         case "+": 
//         result.innerText = numValue1 + numValue2; break;
//         case "-": 
//         result.innerText = numValue1 - numValue2; break;
//         case "x": 
//         result.innerText = numValue1 * numValue2; break;
//         case "/": 
//         result.innerText = numValue1 / numValue2; break;

//         default: case "+": 
//         result.innerText = "Invalid operation"; break;

//     }
// }