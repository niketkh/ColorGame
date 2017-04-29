var colors, colorCount, squares, pickedColor, colorDisplay, messageDisplay, headSection, resetButton, easyButton, hardButton;

init();


resetButton.addEventListener("click", function(){
	colors = pickRandomColors(colorCount);
	pickedColor = pickColor(colors);
	colorDisplay.textContent = pickedColor;
	headSection.style.backgroundColor = "steelblue";

	for (var i = 0; i < squares.length; i++) {
		if(i<colorCount)
			squares[i].style.backgroundColor = colors[i];
		else
			squares[i].style.display = "none";
	}
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
});

easyButton.addEventListener("click", function(){
	colorCount = 3;
	colors = pickRandomColors(colorCount);
	pickedColor = pickColor(colors);
	headSection.style.backgroundColor = "steelblue";
	colorDisplay.textContent = pickedColor;
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");

	for (var i = 0; i < squares.length; i++) {
		if(i<colorCount)
			squares[i].style.backgroundColor = colors[i];
		else
			squares[i].style.display = "none";
	}
	messageDisplay.textContent = "";
});

hardButton.addEventListener("click", function(){
	colorCount = 6;
	colors = pickRandomColors(colorCount);
	pickedColor = pickColor(colors);
	headSection.style.backgroundColor = "steelblue";
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");
	colorDisplay.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++) {
		// Add initial colors to squares
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
	messageDisplay.textContent = "";
})


function init(){
	colorCount = 6;
	getReferences();
	colors = pickRandomColors(colorCount);
	pickedColor = pickColor(colors);
	colorDisplay.textContent = pickedColor;
	initSquares();
}

function getReferences(){
	// Get references
	squares = document.querySelectorAll(".square");
	colorDisplay = document.getElementById("colorDisplay");
	messageDisplay = document.getElementById("message");
	headSection = document.getElementById("headSection");
	resetButton = document.getElementById("reset");
	easyButton = document.getElementById("easy");
	hardButton = document.getElementById("hard");


}

function initSquares(){
	for (var i = 0; i < squares.length; i++) {
		// Add initial colors to squares
		squares[i].style.background = colors[i];
		// Add Click Listeners
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!!!";
				messageDisplay.style.backgroundColor = pickedColor;
				headSection.style.backgroundColor = pickedColor;
				resetButton.textContent = "Play Again?";
				changeColor(pickedColor);
			}
			else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
				messageDisplay.style.backgroundColor = "red";
			}
		})
	}
}


function pickRandomColors(number){
	var colors = [];
	for (var i = 0; i < number; i++) {
		colors.push(randomColor());
	}
	return colors;
}

function pickColor(colors){
	return colors[Math.floor(Math.random()*colors.length)]
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	var color = "rgb(" + r + ", " + g + ", " + b + ")";
	return color;
}

function changeColor(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}


