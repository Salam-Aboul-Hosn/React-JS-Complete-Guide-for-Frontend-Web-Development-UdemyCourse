let listA = document.getElementById("A");
let listS = document.getElementById("S");
let listD = document.getElementById("D");
let listF = document.getElementById("F");
let listG = document.getElementById("G");
let listH = document.getElementById("H");
let listJ = document.getElementById("J");
let listK = document.getElementById("K");
let listL = document.getElementById("L");

document.addEventListener("keydown", function(e) {
   let keyCode = e.key;
   console.log(keyCode);
   let audio = null;
   if (keyCode === 'A') {
       listA.style.border = "5px solid blue";
       listA.style.backgroundColor = "black";
       listA.style.color = "white";
   } else if (keyCode === 'S') {
        listS.style.border = "5px solid blue";
        listS.style.backgroundColor = "black";
        listS.style.color = "white";
   } else if (keyCode === 'D') {
        listD.style.border = "5px solid blue";
        listD.style.backgroundColor = "black";
        listD.style.color = "white";
   } else if (keyCode === 'F') {
        listF.style.border = "5px solid blue";
        listF.style.backgroundColor = "black";
        listF.style.color = "white";
   } else if (keyCode === 'G') {
        listG.style.border = "5px solid blue";
        listG.style.backgroundColor = "black";
        listG.style.color = "white";
   } else if (keyCode === 'H') {
        listH.style.border = "5px solid blue";
        listH.style.backgroundColor = "black";
        listH.style.color = "white";
   } else if (keyCode === 'J') {
        listJ.style.border = "5px solid blue";
        listJ.style.backgroundColor = "black";
        listJ.style.color = "white";
   } else if (keyCode === 'K') {
        listK.style.border = "5px solid blue";
        listK.style.backgroundColor = "black";
        listK.style.color = "white";
   } else if (keyCode === 'L') {
        listL.style.border = "5px solid blue";
        listL.style.backgroundColor = "black";
        listL.style.color = "white";
   }   
   console.log("test");
});

document.addEventListener("keyup", function(e) {
   let keyCode = e.key;
   console.log(keyCode);
   if (keyCode === 'A') {
       listA.style.border = "";
       listA.style.backgroundColor = "";
       listA.style.color = "";
   } else if (keyCode === 'S') {
        listS.style.border = "";
        listS.style.backgroundColor = "";
        listS.style.color = "";
   } else if (keyCode === 'D') {
        listD.style.border = "";
        listD.style.backgroundColor = "";
        listD.style.color = "";
   } else if (keyCode === 'F') {
        listF.style.border = "";
        listF.style.backgroundColor = "";
        listF.style.color = "";
   } else if (keyCode === 'G') {
        listG.style.border = "";
        listG.style.backgroundColor = "";
        listG.style.color = "";
   } else if (keyCode === 'H') {
        listH.style.border = "";
        listH.style.backgroundColor = "";
        listH.style.color = "";
   } else if (keyCode === 'J') {
        listJ.style.border = "";
        listJ.style.backgroundColor = "";
        listJ.style.color = "";
   } else if (keyCode === 'K') {
        listK.style.border = "";
        listK.style.backgroundColor = "";
        listK.style.color = "";
    } else if (keyCode === 'L') {
        listL.style.border = "";
        listL.style.backgroundColor = "";
        listL.style.color = "";
    }
})
