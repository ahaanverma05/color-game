var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = randomColorG();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetBtn = document.querySelector("#reset")
 
colorDisplay.textContent = pickedColor;
for(var i = 0; i < squares.length; i++){
    if(colors[i]){
        squares[i].style.background = colors[i];
    } else {
        squares[i].style.display = "none";
    }
}
 
function reset(){
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
 
}
 
resetBtn.addEventListener("click", reset)
 
colorDisplay.textContent = pickedColor;
 
for(var i = 0; i < squares.length; i++) {
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		console.log(clickedColor, pickedColor);
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
            setTimeout(redie, 5000)
 
            function redie() {
				location.reload()
			} 

			secstaken = secstaken;
			hdiuhwa = false;
			document.getElementById("uiahdewsi").style.opacity = "1";
			document.getElementById("uiahdewsi").style.zIndex = "9";
 
		}	else {
			this.style.backgroundColor = "#232323";
			this.style.zIndex = "-1";
			messageDisplay.textContent = "Try Again";
		}
		});
}
 
function randomColorG(){
	//pick a random number
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}
 
function generateRandomColors(genColor){
	//make an array
	var arr = []
	//repeat num times
	for(var i = 0; i < genColor; i++){
	// get random color and push into array
		arr.push(randomColor())
	}
	//return that array
	return arr;
}
 
function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	// pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r +", " + g +", " + b +")";
}

var hdiuhwa = true;

setInterval(addtimer, 1000)
var secstaken = 0;
function addtimer() {
	if (hdiuhwa == true) {
	secstaken = secstaken+1;
}
	document.getElementById("timer").innerHTML = secstaken
}

document.getElementById("uiahdewsi").style.left = window.innerWidth/4;