/* Calendar */

// Connection of the functionality of the layout
// Connection of the list of active modules
import { flsModules } from "../modules.js";

// Module connection
import datepicker from 'js-datepicker';

const picker = datepicker('[data-datepicker]', {
	customDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
	customMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
	overlayButton: 'Apply',
	overlayPlaceholder: 'Year (4 digits)',
	startDay: 1,
	formatter: (input, date, instance) => {
		const value = date.toLocaleDateString()
		input.value = value
	},
	onSelect: function (input, instance, date) {

	}
});
flsModules.datepicker = picker;
