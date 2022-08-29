/*
Documentation on work in the template: 
Slider documentation: https://swiperjs.com/
Snippet(HTML): swiper
*/

// Connection a slider Swiper from node_modules
// if necessary, connect the additional modules of the slider, indicating them in {} through a comma
// Example: { Navigation, Autoplay }
import Swiper, { Navigation } from 'swiper';
/*
The main modules of the slider:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Look more https://swiperjs.com/
*/

// Styles Swiper
// Basic styles
import "../../scss/base/swiper.scss";
// Full set of styles from scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Full set of styles from node_modules
// import 'swiper/css';

// initialization of sliders
function initSliders() {
	// List of sliders
	// Check if there is a slider on the page
	if (document.querySelector('.swiper')) { // Indicate the class of the desired slider
		// Create a slider
		new Swiper('.swiper', { // Specify the sklashes of the desired slider
			// Connect the slider modules
			// for a specific case
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Pagination
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Scrollbar
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Buttons "left/right"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},

			// Breakpoints
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// Events
			on: {

			}
		});
	}
}
// scroll based on the slider (according to the swiper_scrolle class for the slider's shell)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Launching the initialization of sliders
	initSliders();
	// Launching the initialization of scroll based on a slider (по классу swiper_scroll)
	//initSlidersScroll();
});