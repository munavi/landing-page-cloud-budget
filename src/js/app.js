/*
(i) The code gets into the final file,
Only when the function is caused
for example flsFunctions.spollers();
Or when the entire file is imported,
for example import "files/script.js";
Unused (not caused)
The code in the final file does not get.

If we want to add a module
It should be distinguished
*/

// Switch on switch off FLS (Full Logging System) (At work)
window['FLS'] = true;

// Connecting the main styles file
import "../scss/style.scss";

// ========================================================================================================================================================================================================================================================
// Functional ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as flsFunctions from "./files/functions.js";

/* Support check webp, Adding a class webp or no-webp for HTML */
/* (i) necessary for the correct display webp from css  */
flsFunctions.isWebp();
/* Adding a class touch for HTML If the browser is mobile */
// flsFunctions.addTouchClass();
/* Add loaded for HTML after a full page load */
// flsFunctions.addLoadedClass();
/* Module for working with menu (burger) */
flsFunctions.menuInit();
/* Accounting for a floating panel on mobile devices at 100vh */
// flsFunctions.fullVHfix();

/*
Module for working with spoilers
Documentation: https://template.fls.guru/template-docs/modul-spojlery.html
Snippet (HTML): spollers
*/
// flsFunctions.spollers();

/*
Module for working with tabs
Documentation: https://template.fls.guru/template-docs/modul-taby.html
Snippet (HTML): tabs
*/
// flsFunctions.tabs();

/*
Module "Show more"
Documentation: https://template.fls.guru/template-docs/modul-pokazat-eshhjo.html
Snippet (HTML): showmore
*/
// flsFunctions.showMore();

/*
Popups
Documentation: https://template.fls.guru/template-docs/funkcional-popup.html
Snippet (HTML): pl
*/
// import './libs/popup.js'

/*
Parallax module with a mouse
Documentation: https://template.fls.guru/template-docs/modul-animacii-parallaks-obektov-pri-dvizhenii-myshi.html
*/
// import './libs/parallax-mouse.js'

// ========================================================================================================================================================================================================================================================
// Work with forms ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as flsForms from "./files/forms/forms.js";

/* Working with form fields */
/* Documentation: https://template.fls.guru/template-docs/rabota-s-formami.html */
/*
flsForms.formFieldsInit({
	viewPass: false,
	autoHeight: false
});
*/

/* form submission */
/* Documentation: https://template.fls.guru/template-docs/rabota-s-formami.html */
// flsForms.formSubmit();

/* Form module "amount" */
// flsForms.formQuantity();

/* Star rating module */
// flsForms.formRating();

/* The module of work with select. */
// import './libs/select.js'

/* Working module with calendar */
// import './files/forms/datepicker.js'

/* (At work) Module for working with masks.*/
/*
Connection and configuration is performed in the file js/files/forms/inputmask.js
Documentation on work in the template:
Documentation плагина: https://github.com/RobinHerbots/inputmask
Snippet(HTML):
*/
// import "./files/forms/inputmask.js";

/* Working module with slider */
/*
Connection and configuration is performed in the file js/files/forms/range.js
Documentation on work in the template:
Plugin documentation: https://refreshless.com/nouislider/
Snippet (HTML): range
*/
// import "./files/forms/range.js";

/* Working module with hints (tippy) */
/*
Connection of the plugin Tippy.js and setting is performed in the file js/files/tippy.js
Documentation on work in the template:
Plugin documentation: https://atomiks.github.io/tippyjs/
Snippet (HTML): tip (adds an attribute with a hint for html tag)
*/
// import "./files/tippy.js";

// ========================================================================================================================================================================================================================================================
// Work with a slider (Swiper) ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Slider plugin Connection Setting Swiper and new sliders are performed in the file js/files/sliders.js
Documentation on work in the template: https://template.fls.guru/template-docs/rabota-so-slajderom-swiper.html
Plugin documentation: https://swiperjs.com/
Snippet(HTML): swiper
*/
// import "./files/sliders.js";

// ========================================================================================================================================================================================================================================================
// Work modules with page scroll ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/*
Change design scrollbar
Documentation on work in the template: In HTML add the attribute to the block data-simplebar
Plugin documentation: https://github.com/Grsmto/simplebar/tree/master/packages/simplebar
Snippet(HTML): 
*/
// import './files/scroll/simplebar.js';

// Lazy (delayed) loading pictures
// Documentation on work in the template: https://template.fls.guru/template-docs/modul-lenivaya-podgruzka-lazy-loading.html
// Plugin documentation: https://github.com/verlok/vanilla-lazyload
// Snippet(HTML):
// import './files/scroll/lazyload.js';

// Observer behind objects with attribute data-watch
// Documentation: https://template.fls.guru/template-docs/modul-nabljudatel-za-poyavleniem-elementa-pri-skrolle.html
// Snippet(HTML):
import './libs/watcher.js'

// Functions of work with scroll
import * as flsScroll from "./files/scroll/scroll.js";

// Smooth page navigation
// Documentation: https://template.fls.guru/template-docs/modul-plavnoj-navigacii-po-stranice.html
// flsScroll.pageNavigation();

// The functionality of the addition of classes to the header when scrolling
// Documentation: https://template.fls.guru/template-docs/modul-dobavleniya-klassov-k-shapke-pri-prokrutke-stranicy.html
// flsScroll.headerScroll();

// The functionality of the sticky block
// flsScroll.stickyBlock();

// The module of the provences
// Documentation: https://template.fls.guru/template-docs/modul-poekrannoj-prokrutki-stranicy-fullpage.html
// Snippet(HTML):
// import './libs/fullpage.js'

// Paralax module
// Documentation:
// Snippet(HTML):
// import './libs/parallax.js'

// The digital counter animation module
// Documentation:
// Snippet(HTML):
// flsScroll.digitsCounter();

// ========================================================================================================================================================================================================================================================
// Gallery ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Documentation on work in the template: 
Plugin documentation: https://www.lightgalleryjs.com/docs/
Snippet(HTML):
*/
// import "./files/gallery.js";

// ========================================================================================================================================================================================================================================================
// Other plugins ============================================================================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/* Dynamic adaptive */
// Documentation: https://template.fls.guru/template-docs/dinamicheskij-adaptiv.html
// import "./libs/dynamic_adapt.js";

/* Formatting numbers */
// import './libs/wNumb.min.js';

// ========================================================================================================================================================================================================================================================
// Other ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/* Connect files with our code */
import "./files/script.js";
//============================================================================================================================================================================================================================================