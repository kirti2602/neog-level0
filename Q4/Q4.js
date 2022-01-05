// Create a web app where I can input a text. Now, 
// create three buttons: red, green, blue. 
// Clicking on the button should change the text color.

let input = document.getElementById("input");

let buttons = document.getElementsByClassName("btn");

for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", function(event){
        let TextColor = event.target.textContent;
        input.style.color = TextColor;

    })

}