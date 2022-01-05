let number = document.getElementById("input")
let btn = document.getElementById("btn")
let output = document.getElementById("output")


btn.addEventListener("click", ()=>{
let inputValue = parseInt(number.value);
console.log(typeof inputValue)
console.log((inputValue*inputValue)%10)
if(inputValue == (inputValue*inputValue)%10){
output.innerText = "The number is Automorohic";
}
else{
  output.innerText = "The number is not Automorohic";
}
})
