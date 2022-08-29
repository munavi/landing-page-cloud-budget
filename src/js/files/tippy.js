import { isMobile, FLS } from "./functions.js";
// connecting the list of active modules
import { flsModules } from "./modules.js";

// Connection from node_modules
import tippy from 'tippy.js';

// Connecting with styles from src/scss/libs
import "../../scss/libs/tippy.scss";

// Connecting with styles from node_modules
//import 'tippy.js/dist/tippy.css';

// Launch and add modules to the object
flsModules.tippy = tippy('[data-tippy-content]', {

});