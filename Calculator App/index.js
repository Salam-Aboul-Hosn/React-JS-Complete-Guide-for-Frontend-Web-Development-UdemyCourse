let whiteSpace = document.getElementById("white-space")
let content = document.createElement("p")
let seven = document.getElementById("seven")
let list = document.getElementById("grid-numbers") 

let buttons = document.querySelectorAll("li");

content.appendChild(document.createTextNode("helllo there"))

buttons.forEach(button => {
    button.addEventListener("click", function(event) {
        let value = event.target.textContent;
        if(value !== "C") {
            let newListElement = document.createElement("span")
            let textNode = document.createTextNode(value)
            newListElement.appendChild(textNode)
            whiteSpace.appendChild(newListElement)
            newListElement.style.padding = "10px";
            newListElement.style.fontSize = "25px";
        } else if(value === "=") {
            alert("worked")
        } else {
            let parentElement = document.getElementById("white-space");
            while (parentElement.firstChild) {
                parentElement.removeChild(parentElement.firstChild);
            }
        }
    })
})