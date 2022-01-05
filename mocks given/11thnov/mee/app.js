// Here's an API, display the name(product) of the product whose (quantity) is greater than 5000. 
// Also, display the image of those products(image)

let img = document.getElementById("display");

let URL = "https://national-api.hiteshtalreja.repl.co/api/Stock";

fetch(URL)
.then(response => response.json())
.then(data => {
   let products = data.product;
    for(let i = 0; i< products.length; i++){
        if(products[i].quantity > 5000){
            let image = document.createElement("img");
            image.setAttribute("src", products[i].image);
            image.style.height = "200px";
            document.body.appendChild(image);
        }
    }
}
    )

