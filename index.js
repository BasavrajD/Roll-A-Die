var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var randomImage = "./images/dice"+randomNumber1+".png";

document.querySelector("img").setAttribute("src",randomImage)

document.querySelector("h1").innerHTML = "It is a "+randomNumber1;

function refresh(){
    window.location.reload("Refresh")
}