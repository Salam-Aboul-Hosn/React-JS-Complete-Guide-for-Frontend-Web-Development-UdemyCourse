let addButton = document.getElementById("add-button")
let list = document.getElementById("list")

let input =  document.getElementById("search-bar")

let value;
input.addEventListener("input", function(event) {
    value = event.target.value;
})

input.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
        addtoList()
    }
})

function addtoList() {
    let newListElement = document.createElement("li")
    let textNode = document.createTextNode(value)
    if(typeof(value) === "undefined" || value ==="") {
        alert("Please Enter A Valid TODO Item")
        return
    }
    newListElement.appendChild(textNode)
    list.appendChild(newListElement)

    input.value = "";
}
addButton.addEventListener("click", addtoList)

