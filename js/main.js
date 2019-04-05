// for main menu

(function(){
	"use strict";
	
	console.log("fired");

	var button = document.querySelector("#button");
	var burgerCon = document.querySelector("#burgerCon");

	function hamburgerMenu() {
		burgerCon.classList.toggle("toggle");
		button.classList.toggle("rotation");
	}

	button.addEventListener("click", hamburgerMenu, false);


	// for images hide and show


	var buttonTwo = document.querySelector('.greenBoxTwo');
	var hideImage = document.querySelector('.duties');

	function hideImages() {
		hideImage.classList.toggle('toggle');
	}

	buttonTwo.addEventListener('click', hideImages, false);

		
})();