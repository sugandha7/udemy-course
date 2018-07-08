var colors = [];
var numSquares = 6;
var pickedColor = selectColor(colors);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");
var buttons = document.querySelectorAll('button');

init();

function init() {
	setUpModeBtns();
	setUpSquares();
	resetButton.addEventListener("click", reset)
	reset();
}

function setUpModeBtns() {
	for (var i = 0; i < modeBtns.length; i++) {
		modeBtns[i].addEventListener("click", function(){
			modeBtns[0].classList.remove("selected");
			modeBtns[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy"? numSquares = 3: numSquares = 6;
			reset();
		})
	}
}

function setUpSquares() {
	for (var i = 0; i < squares.length; i++) {

		squares[i].style.backgroundColor = colors[i];
		squares[i].addEventListener("click", function () {
			
			clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor)
			{
				messageDisplay.textContent = "Correct!";
				changeColor(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play again?";
			}
			else
			{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try again!";
				
			}
		})
	}
}

function reset() {
	//generate new colors array
	colors = generateRandomColors(numSquares);
	//select random color from array
	pickedColor = selectColor(colors);
	//change colorDisplay to selected color
	colorDisplay.textContent = pickedColor;
	//reset message display to empty string
	messageDisplay.textContent = "";
	//reset h1 background
	h1.style.backgroundColor = "steelblue";
	//Reset the button name to new colors
	resetButton.textContent = "New colors";
	//change colors of all squares to new color array
	for (var i = 0; i < squares.length; i++) {
		if(colors[i])
		{
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else
		{
			squares[i].style.display = "none";
		}
	}
}

function changeColor(color) {
	// change color of al squares to the correct color.
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function selectColor(colors) {
	// choose a random color from the colors array.
	var random = Math.floor(Math.random()*colors.length);
	return(colors[random]);
}

function generateRandomColors(length) {
	//Generate a color array randomly.
	var arr = [];
	for (var i = 0; i < length; i++) {
		var red = Math.floor(Math.random()*256);
		var green = Math.floor(Math.random()*256);
		var blue = Math.floor(Math.random()*256);
		arr.push("rgb("+red+", "+green+", "+blue+")");
	}
	return(arr);
}
