/*The question Pranshu asked was that the user will not be able to
add more characters after a certain limit has been reached (deleting 
characters is still possible). He asked Saksham to disable the button 
when the text area is empty and enable it when something is typed.*/

let input = document.getElementById("input")
let btn = document.getElementById("btn");

input.addEventListener("input", ()=> {
    
    let tweet = input.value.length;

    //disabled button when textarea is empty
    if(tweet !== 0){
        btn.removeAttribute("disabled");
    }

    // limited characters can be entered 
    if(tweet > 50){
        input.setAttribute("disabled", "disabled");
    }
})
