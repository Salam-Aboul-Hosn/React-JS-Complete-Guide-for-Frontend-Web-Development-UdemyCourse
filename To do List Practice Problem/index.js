let addButton = document.getElementById("add-button")
let list = document.getElementById("list")

let input =  document.getElementById("search-bar")

let value;
input.addEventListener("input", function(event) {
    value = event.target.value;
    console.log(value)
})
addButton.addEventListener("click", function() {
    let newListElement = document.createElement("li")
    let textNode = document.createTextNode(value)
    if(typeof(value) === "undefined" || value ==="") {
        alert("Please Enter A Valid TODO Item")
        return
    }
    newListElement.appendChild(textNode)
    list.appendChild(newListElement)

    input.value = "";
})

