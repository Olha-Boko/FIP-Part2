// for main menu

(function(){
	"use strict";
	
	console.log("fired");

	var button = document.querySelector("#button");
	var burgerCon = document.querySelector("#burgerCon");
	var butRight = document.querySelector('.pushBut');
	var butLeft = document.querySelector('.pushButTwo');
	var img = document.querySelectorAll('.sale img');
	var animBut = document.querySelector('.pushAnim');
	var animButTwo = document.querySelector('.push');
	var count = 0;

	function hamburgerMenu() {
		burgerCon.classList.toggle("toggle");
		button.classList.toggle("rotation");
	}


	function left() {
		img[count].className = '';
		count--;

		 if(count < 0) {
		 	count = img.length - 1;
		 }

		 img[count].className = 'opc';

	};

	function right() {
		img[count].className = '';
		count++;

		if(count >= img.length) {
			count = 0;
		}

		img[count].className = 'opc';
	}

	function animateIcon() {
		TweenMax.to(animBut, 0.7, {scaleX: 1.5, scaleY: 1.5, ease:  SlowMo.easeOut})};

	function animateIconTwo() {
		TweenMax.to(animButTwo, 0.7, {scaleX: 1.5, scaleY: 1.5, ease:  SlowMo.easeOut})};
	

    butRight.addEventListener('click', right);
	butLeft.addEventListener('click', left);
    button.addEventListener("click", hamburgerMenu, false);
    animBut.addEventListener('click', animateIcon);
    animButTwo.addEventListener('click', animateIconTwo);

		
})();