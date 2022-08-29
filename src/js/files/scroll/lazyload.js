import LazyLoad from "vanilla-lazyload";

// Works with objects with a class ._lazy
const lazyMedia = new LazyLoad({
	elements_selector: '[data-src],[data-srcset]',
	class_loaded: '_lazy-loaded',
	use_native: true
});

// Update the module
//lazyMedia.update();