// JavaScript Document

//self executing anonymous function

(function () {
	"use strict";

	console.log("fired");

	var button = document.querySelector("#button");
	var mainNav = document.querySelector("#mainNav");
	var burgerMenu = document.querySelector("#burgerMenu");

	var prevButton = document.querySelector("#next");
	var nextButton = document.querySelector("#previous");

	function hammainNav() {
		burgerMenu.classList.toggle("hide");
		button.classList.toggle("expanded");
	}

	function pageScrollHandler(e) {
		var scroll = this.scrollY;

		if (scroll >= 100) {
			mainNav.classList.add('scrolled');
		}
		else {
			mainNav.classList.remove('scrolled');
		}
	}

	function onInputHandler(e) {
		var label = document.querySelector("label[for='" + e.target.id + "']");
		var input = document.querySelector("#" + e.target.id);

		if (input.value.length > 0) {
			label.className = 'hidden';
		} else {
			label.className = '';
		}
	}


	function ImageSlider() {
		this.index = 0;
		this.images = ['sarah.jpg', 'green_cactus.jpg'];
		this.next = function () {
			this.index = (this.index + 1) % this.images.length;
			this.changeImage();
		}
		this.prev = function () {
			this.index = (this.index + this.images.length - 1) % this.images.length
			this.changeImage();
		}
		this.changeImage = function () {
			document.querySelector('#featuredSection').style.backgroundImage = `url('images/${this.images[this.index]}')`;
		}
	}

	function Sensor() {
		this.read = function () {
			setInterval(this.showReadings, 900);
		}
		this.showReadings = function () {
			document.querySelector('#temperature').innerHTML = (~~(Math.random() * 3) + 28) + ' &deg;C';
			document.querySelector('#moisture').innerHTML = (~~(Math.random() * 5) + 70) + ' %';
			document.querySelector('#light').innerHTML = (~~(Math.random() * 110) + 900) + ' μm';
		}
	}

	var slider = new ImageSlider();
	var sensor = new Sensor();



	button.addEventListener("click", hammainNav, false);
	window.addEventListener("scroll", pageScrollHandler);

	if (prevButton != null) {
		prevButton.addEventListener("click", slider.next.bind(slider), false);
		nextButton.addEventListener("click", slider.prev.bind(slider), false);
		sensor.read();
	}

	document.querySelectorAll('.formItem input').forEach(
		element => element.addEventListener("input", onInputHandler, false)
	);

})();


