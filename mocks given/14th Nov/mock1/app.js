// find vowels and consonants in a text 

let text = document.getElementById("text")
let button = document.getElementById("btn")
let output = document.getElementById("output")
let vowels = "aeoiu";


button.addEventListener("click", ()=>{
    let count = 0;
    let count1 = 0;
    let textValue = text.value;
    let withoutSpace = textValue.replace(' ', '');

    console.log(withoutSpace)
    for(let i = 0; i< withoutSpace.length; i++){
        if(vowels.includes(withoutSpace[i])){
            count++;
        }
        else{
            count1++;
        }
    }
    output.innerText = count + " " + count1
})


