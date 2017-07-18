console.log ("works");

let outputArea = document.getElementById("temp-output");

function toCelsius () {
	let ogFahren = document.getElementById("temp-input").value;
	let nowCels = Math.floor(((ogFahren - 32) * 5) / 9);
	outputArea.innerHTML = nowCels;
		if (nowCels < 0) {
			outputArea.innerHTML = `<div class="blue">${nowCels}</div>`
 		}else if (nowCels > 32) {
 			outputArea.innerHTML = `<div class="red">${nowCels}</div>`
			}else {
				outputArea.innerHTML = `<div class="green">${nowCels}</div>`
			}
}

function toFahrenheit () {
	console.log("hello")
	let ogCels = document.getElementById("temp-input").value;
	let nowFahren = Math.floor(((ogCels * 9) / 5) + 32);
	outputArea.innerHTML = nowFahren;
	if (nowFahren < 32) {
			outputArea.innerHTML = `<div class="blue">${nowFahren}</div>`
 		}else if (nowFahren > 90) {
 			outputArea.innerHTML = `<div class="red">${nowFahren}</div>`
			}else {
				outputArea.innerHTML = `<div class="green">${nowFahren}</div>`
			}

}

// Get a reference to the button element in the DOM
let button = document.getElementById("converter");
let clearButton = document.getElementById("clear-temp");


// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
	let fahrenChecked = document.getElementById("fahren-checked");
	let celsChecked = document.getElementById("cels-checked");
	if (fahrenChecked.checked === true) {
		toFahrenheit();
	}
	else if (celsChecked.checked === true) {
		toCelsius();
	}

  console.log("event", clickEvent);
}

function clearTheField() {
	document.getElementById("temp-input").value = "";
	document.getElementById("temp-output").innerHTML = "";
}


// Assign a function to be executed when the button is clicked
document.getElementById("clear-temp").addEventListener("click", clearTheField)
document.getElementById("converter").addEventListener("click", determineConverter)