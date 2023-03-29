let whiteSpace = document.getElementById("white-space")
let content = document.createElement("p")
let eight = document.getElementById("eight")
let add = document.getElementById("add")
let equal = document.getElementById("equal")

let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let four = document.getElementById("four")
let five = document.getElementById("five")
let six = document.getElementById("six")
let seven = document.getElementById("seven")
let nine = document.getElementById("nine")
let minus = document.getElementById("minus")
let multiply = document.getElementById("multiply")
let divide = document.getElementById("divide")
let zero = document.getElementById("zero")




let list = document.getElementById("grid-numbers") 

let buttons = document.querySelectorAll("li");

//content.appendChild(document.createTextNode("helllo there"))
let inputString = ""
buttons.forEach(button => {
    button.addEventListener("click", function(event) {
        let value = event.target.textContent;
        if(value === "=") {
            inputString=eval(inputString)
            let newListElement = document.createElement("span")
            let textNode = document.createTextNode(inputString)
            removeAll()
            newListElement.appendChild(textNode)
            whiteSpace.appendChild(newListElement)
            newListElement.style.fontSize = "25px";
            if(value ==="+" || value === "-" || value === "*" || value === "/") {
                newListElement.style.padding = "10px";
            }
            inputString =""
            
        } else if(value !== "C") {
            let newListElement = document.createElement("span")
            let textNode = document.createTextNode(value)
            newListElement.appendChild(textNode)
            whiteSpace.appendChild(newListElement)
            newListElement.style.fontSize = "25px";
            if(value ==="+" || value === "-" || value === "*" || value === "/") {
                newListElement.style.padding = "10px";
            }
        } else {
            removeAll()
        }
    })
})

function removeAll() {
    let parentElement = document.getElementById("white-space");
        while (parentElement.firstChild) {
            parentElement.removeChild(parentElement.firstChild)
        }
    inputString =""
}

zero.addEventListener('click',function(){
    inputString+='0'
})
seven.addEventListener('click',function(){
    inputString+='7'
})
   
one.addEventListener('click',function(){
    inputString+='1'
})

two.addEventListener('click',function(){
    inputString+='2'
})

three.addEventListener('click',function(){
    inputString+='3'
})

four.addEventListener('click',function(){
    inputString+='4'
})

five.addEventListener('click',function(){
    inputString+='5'
})


six.addEventListener('click',function(){
    inputString+='6'
})

eight.addEventListener('click',function(){
    inputString+='8'
})


nine.addEventListener('click',function(){
    inputString+='9'
})


add.addEventListener('click',function(){
    inputString+='+'
})

minus.addEventListener('click',function(){
    inputString+='-'
})
multiply.addEventListener('click',function(){
    inputString+='*'
})
divide.addEventListener('click',function(){
    inputString+='/'
})
