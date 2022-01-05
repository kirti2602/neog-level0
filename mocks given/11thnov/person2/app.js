let btn = document.getElementById("btn");
let colors = ["blue", "red", "aqua", "green", "yellow", "black", "orange", "yellowgreen"]

btn.addEventListener("click", ()=> {
    let container = document.createElement("div");
    container.style.height = "100px";
    container.style.width = "100px";
    container.style.display = "inline-block"
    container.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)]; //it is in memory
    document.body.appendChild(container)
    
    // container.addEventListener("click", () => {
    //     container.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
    // })
})