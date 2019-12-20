var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var background = getComputedStyle(body).getPropertyValue("background-image");

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

//Function to convert hex format to a rgb color
function rgb2hex(rgb) {
	rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
	return (rgb && rgb.length === 4) ? "#" +
		("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
		("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
		("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
}

function setColorInputValue() {
	var begin = background.search("rgb");
	var end = background.search("\\),");
	var rgb = background.substring(begin, end + 1);

	color1.value = rgb2hex(rgb);

	begin = end + 3;
	end = background.search("\\)\\)");
	rgb = background.substring(begin, end + 1);

	color2.value = rgb2hex(rgb);
}

setColorInputValue();

body.style.background = background;
css.textContent = body.style.background + ";";

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);