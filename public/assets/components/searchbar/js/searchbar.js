/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	var currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.getElementById("searchbar").style.top = "0px";
	} else {
		document.getElementById("searchbar").style.top = "-100px";
	}
	prevScrollpos = currentScrollPos;

}