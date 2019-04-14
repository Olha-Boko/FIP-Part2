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

	// for images hide and show



    button.addEventListener("click", hamburgerMenu, false);

		
})();