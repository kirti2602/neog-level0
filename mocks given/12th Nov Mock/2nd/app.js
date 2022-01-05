// Create a web app to simulate the character counter functionality 
// of Twitter. When user starts to type something, 
// counter should starts to decrease from 30. 
// When counter reaches to 15, show it in yellow 
// till 0. When counter reaches to 0, show it in 
// red till infinite -ve number ( no min limit ).
//  Now create a button. On clicking the button, 
//  show the input text on web page. 
// Also, when counter is less than 0, disable the button.

let tweetInput = document.getElementById("tweet");
let counterP = document.getElementById("counter");
let button = document.getElementById("btn");
let tweetDisplay = document.getElementById("showTweet")


tweetInput.addEventListener("input", ()=>{
    let counter= 30;
    let tweetValue = tweetInput.value;
    counter = counter- tweetValue.length;
    counterP.innerText = counter;

    if(counter <= 15 && counter>=0){
        counterP.style.color = "yellow"
    }
    else if(counter < 0){
        counterP.style.color = "red";
        button.setAttribute("disabled", "disabled")
    }
})

button.addEventListener("click", ()=>{
    let tweetValue = tweetInput.value;
    tweetDisplay.innerText = tweetValue;

})


