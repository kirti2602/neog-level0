// Create a web app where I can input a text. 
// Now, create three buttons h1, h2, h3. 
// When I click on any of the button, 
// the text should become h1, h2, or h3.

let input = document.getElementById("input");
let btns = document.getElementsByClassName("btn");
let output = document.getElementById("output");

input.addEventListener("input", function(){
    output.innerText = input.value;
})


for (let i = 0; i < btns.length; i++) {
btns[i].addEventListener("click", function(event) {
    let tag = event.target.textContent;
    
    let newTag = document.createElement(tag);
    console.log(newTag)
    newTag.setAttribute("id", "output");

    newTag.innerText = output.innerText;

    output.parentNode.replaceChild(newTag, output)
    output = newTag;
})    
}