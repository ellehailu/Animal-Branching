window.onload = function (){
const form = document.querySelector("form");
form.onsubmit = function (event){
    event.preventDefault();

    const userInput = document.getElementById("userInput").value;
    const finalInput = userInput.toUpperCase(); 

    let dogdiv = document.getElementById("dog");
    dogdiv.setAttribute("class", "hidden");
    let catdiv = document.getElementById("cat");
    catdiv.setAttribute("class", "hidden");
    let turtlediv = document.getElementById("turtle");
    turtlediv.setAttribute("class", "hidden");
    
    
    
    if (finalInput === "DOG") {
        dogdiv.removeAttribute("class");
    }
    else if (finalInput === "CAT") {
        catdiv.removeAttribute("class");
    }
    else if (finalInput === "TURTLE") {
        turtlediv.removeAttribute("class");
    }
    
    else {
        alert("We don't have that animal!!")
    }

};
};

