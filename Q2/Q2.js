let input = document.getElementById("input");
let btns = document.getElementsByClassName("btn");
// let btnMinus = document.getElementById("minus");
let output = document.getElementById("output");

let font = parseInt(window.getComputedStyle(input).fontSize);

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
        let operation = event.target.textContent;
        
        switch(operation){
            case "+" : 
            font += 2;
            input.style.fontSize = font + "px"
            break;

            case "-":
            font -= 2; 
            input.style.fontSize = font + "px"
            break;

            default: 
            console.log("WRONG CHOICE");
            break

        }
    })
}