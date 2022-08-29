/ * Masks for fields (in work) */

// Connection of the list of active modules
import { flsModules } from "../modules.js";

// Module connection
import "inputmask/dist/inputmask.min.js";

const inputMasks = document.querySelectorAll('input');
if (inputMasks.length) {
	flsModules.inputmask = Inputmask().mask(inputMasks);
}