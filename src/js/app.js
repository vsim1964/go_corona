import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

var acc = document.getElementsByClassName("question__accordion");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		/* Toggle between adding and removing the "active" class,
		to highlight the button that controls the panel */
		this.classList.toggle("active");

		/* Toggle between hiding and showing the active panel */
		var panel = this.nextElementSibling;
		if (panel.style.display === "block") {
			panel.style.display = "none";
		} else {
			panel.style.display = "block";
		}
	});


}

/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/
