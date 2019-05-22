/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	var currentScrollPos = window.pageYOffset;
	if ( currentScrollPos>= prevScrollpos-150) {
		document.getElementById("searchbar").style.top = currentScrollPos+"px";
	} else {
		document.getElementById("searchbar").style.top = "-100px";
	}
	console.log("currentScrollPos",currentScrollPos);
	console.log("prevScrollpos",prevScrollpos);
	
	prevScrollpos = currentScrollPos;

}

