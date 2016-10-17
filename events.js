/*GET INPUTS*/
var section = document.getElementsByClassName("article-section");
var header = document.getElementById("page-header");
var input = document.getElementById("keypress-input");
var output = document.getElementById("output-target");
var guineaPig = document.getElementById("guinea-pig");
var colorBtn = document.getElementById("add-color");
var hulkBtn = document.getElementById("make-large");
var captureBtn = document.getElementById("add-border");
var roundedBtn = document.getElementById("add-rounding");

/*FUNCTIONS*/
function clickSection (event){
    var elementText = event.target.innerHTML;
    output.innerHTML = "Oooh you clicked the " + elementText + " section";
}

    for (var i=0; i < section.length; i++){
        section[i].addEventListener("click", clickSection);
    } 
function mouseEventHeaderOver (event) {
    output.innerHTML = "Oooh you touched my header";
}

function mouseEventHeaderOut (event) {
        output.innerHTML = "I didnt say stop...";
}

/*EVENT LISTENERS*/
header.addEventListener("mouseover", mouseEventHeaderOver);
header.addEventListener("mouseout", mouseEventHeaderOut);
input.addEventListener("keyup", function (event) {
    output.innerHTML = event.target.value;
});
colorBtn.addEventListener("click", function(event) {
    guineaPig.classList.toggle("blue");
});
hulkBtn.addEventListener("click", function (event) {
    guineaPig.classList.toggle("hulkify");
});
captureBtn.addEventListener("click", function (event) {
    guineaPig.classList.toggle("capture");
});
roundedBtn.addEventListener("click", function(event) {
    guineaPig.classList.toggle("round");
});









