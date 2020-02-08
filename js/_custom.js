document.addEventListener("DOMContentLoaded", function () {
	let mySwiper = new Swiper('.swiper-container', {
		slidesPerView: 1,
		loop: true,
		width: 380,
		navigation: {
			nextEl: '.arrow',
		},
		breakpoints: {
			// when window width is >= 320px
			580: {
				slidesPerView: 2,

			},
		},
	});

	let menuBtn = document.querySelector('.menu-btn');
	let menu = document.querySelector('.header');
	menuBtn.addEventListener('click', () => {
		menu.classList.toggle('header-active');
		menuBtn.classList.toggle('menu_active');
	});

});