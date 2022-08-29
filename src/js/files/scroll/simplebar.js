// Connecting a plugin from node_modules
import SimpleBar from 'simplebar';
// Connection of styles from node_modules
import 'simplebar/dist/simplebar.css';

// Add the attribute to the block data-simplebar

// You can also initialize the following code using the settings
/*
if (document.querySelectorAll('[data-simplebar]').length) {
	document.querySelectorAll('[data-simplebar]').forEach(scrollBlock => {
		new SimpleBar(scrollBlock, {
			autoHide: false
		});
	});
}
*/