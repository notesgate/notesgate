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




$(document).ready(function () {
    
	$("#searchbar").bind("keypress", {}, keypressInBox);

	function keypressInBox(e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == 13) { //Enter keycode     
			if(document.getElementById('inSearchbar').value==="" || document.getElementById('inSearchbar').value.length==0){
				return
			}
			// console.log('e.value :', );
			let flag=document.querySelector('body').getAttribute('data-pos');
			console.log('flag :', flag);
			if(flag==="note"){
				window.location.href = "/note/search/" +document.getElementById('inSearchbar').value;
			}
			if(flag==="board"){
				window.location.href = "/board/search/" +document.getElementById('inSearchbar').value;
			}
		}
	};
	
});