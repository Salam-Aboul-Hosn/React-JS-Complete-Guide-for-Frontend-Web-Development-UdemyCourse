let blackButton = document.getElementById("black")
let blueButton = document.getElementById("blue")
let pinkButton = document.getElementById("pink")
let redButton = document.getElementById("red")

let timeTxt = document.getElementById("time-text");
let heartImg = document.getElementById("heart-img");
let heartTxt = document.getElementById("heart-text");


var timeBtn = document.getElementById("time-btn");
var heartBtn = document.getElementById("heart-btn");

redButton.addEventListener("click", function() {
    img.src = "/Smart Watch Show Case/red.png";
})

blackButton.addEventListener("click", function() {
    img.src = "/Smart Watch Show Case/black.png";
})

pinkButton.addEventListener("click", function() {
    img.src = "/Smart Watch Show Case/pink.png";
})

blueButton.addEventListener("click", function() {
    img.src = "/Smart Watch Show Case/blue.png";
})




function time() {
    heartTxt.classList.remove("show");
    heartTxt.classList.add("hide");
    heartImg.classList.remove("show");
    heartImg.classList.add("hide");
    timeTxt.classList.remove("hide");
    timeTxt.classList.add("show");

    setInterval(() => {
      var d = new Date();
      var s = d.getSeconds();
      var m = d.getMinutes();
      hours = d.getHours();
      timeTxt.textContent =
        ("0" + hours).substr(-2) +
        ":" +
        ("0" + m).substr(-2) +
        ":" +
        ("0" + s).substr(-2)
    }, 1000);
}

function heart() {
    timeTxt.classList.remove("show");
    timeTxt.classList.add("hide");
    heartImg.classList.remove("hide");
    heartImg.classList.add("show");
    heartTxt.classList.remove("hide");
    heartTxt.classList.add("show");
}

timeBtn.addEventListener("click", time);
heartBtn.addEventListener("click", heart);