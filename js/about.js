// for main menu

(function(){
	"use strict";
	
	console.log("fired");

	var button = document.querySelector("#button");
	var burgerCon = document.querySelector("#burgerCon");
	var openBox = document.querySelector('.lightboxTRAA');
	var openBoxTwo = document.querySelector('.lightboxTRAA-on');
	var clickVideo = document.querySelector('#aboutInformation span');
	var closeVideo = document.querySelector('.close h2');

	function hamburgerMenu() {
		burgerCon.classList.toggle("toggle");
		button.classList.toggle("rotation");
	}

	// function for lightboxTRAA pop-up

	function openLightbox() {
		console.log('function work');
		// openBox.classList.add('.lightboxTRAA-on');
		// openBox.classList.remove('lightboxTRAA');
		openBox.style.display = 'block';
		
	}

	// function for close the pop-up window

	function closeWindow() {
		openBox.style.display = 'none';
	}

	// for images hide and show



    button.addEventListener("click", hamburgerMenu, false);
    clickVideo.addEventListener('click', openLightbox );
    closeVideo.addEventListener('click', closeWindow);

		
})();