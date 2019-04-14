// for main menu

(function(){
	"use strict";
	
	console.log("fired");

	var button = document.querySelector("#button");
	var burgerCon = document.querySelector("#burgerCon");
	var buttonTwo = document.querySelector('.dutiesOur');
	var hideImage = document.querySelector('.duties');
	var animation = document.querySelector('.icon img');
	var animationText = document.querySelector('.iconAnim');
	var animationTwo = document.querySelector('.animOne img');
	var animationTextTwo = document.querySelector('.iconAnimTwo');
	var animationThree = document.querySelector('.animTwo img');
	var animationTextThree = document.querySelector('.iconAnimThree');
	var animationFour = document.querySelector('.animThree img');
	var animationTextFour = document.querySelector('.iconAnimFour');

	function hamburgerMenu() {
		burgerCon.classList.toggle("toggle");
		button.classList.toggle("rotation");
	}

	// for images hide and show


	function hideImages(e) {
		hideImage.classList.toggle('toggle');
	}

	function animateImage() {
		TweenMax.to(animation, 1.2, { scaleX: 1.025, scaleY: 1.025, rotation: 360, ease:SlowMo.easeOut, onComplete:animateText});
	}

	function animateText(){
		TweenLite.to(animationText,0.7,  {css:{color:"#e48210", fontSize:"24px"}, ease:Expo.easeOut});
	}

	function animateImageTwo() {
		TweenMax.to(animationTwo, 1.2, { scaleX: 1.025, scaleY: 1.025, rotation: 360, ease:SlowMo.easeOut, onComplete:animateTextTwo});
	}

	function animateTextTwo(){
		TweenLite.to(animationTextTwo,0.7,  {css:{color:"#e48210", fontSize:"24px"}, ease:Expo.easeOut});
	}


	function animateImageThree() {
		TweenMax.to(animationThree, 1.2, { scaleX: 1.025, scaleY: 1.025, rotation: 360, ease:SlowMo.easeOut, onComplete:animateTextThree});
	}

	function animateTextThree(){
		TweenLite.to(animationTextThree, 0.7,  {css:{color:"#e48210", fontSize:"24px"}, ease:Expo.easeOut});
	}

	function animateImageFour() {
		TweenMax.to(animationFour, 1.2, { scaleX: 1.025, scaleY: 1.025, rotation: 360, ease:SlowMo.easeOut, onComplete:animateTextFour});
	}

	function animateTextFour(){
		TweenLite.to(animationTextFour, 0.7,  {css:{color:"#e48210", fontSize:"24px"}, ease:Expo.easeOut});
	}


	




    animation.addEventListener('mouseover', animateImage);
    animationTwo.addEventListener('mouseover', animateImageTwo);
    animationThree.addEventListener('mouseover', animateImageThree);
    animationFour.addEventListener('mouseover', animateImageFour);
    button.addEventListener("click", hamburgerMenu, false);
	buttonTwo.addEventListener('click', hideImages, false);

		
})();