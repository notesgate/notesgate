$(document).ready(function () {

	// $('#dismiss, .overlay').on('click', function () {
	// 	$('#right-menu').removeClass('active');
	// 	$('.overlay').fadeOut();
	// });

	$('#sidebarCollapse').on('click', function () {
		let width = window.getComputedStyle(document.getElementById("right-menu")).width;
		console.log(width);

		if (window.getComputedStyle(document.getElementById("right-menu")).right === "0px") {
			document.getElementById("right-menu").style.right = "-" + width;
		} else {
			document.getElementById("right-menu").style.right = "0px";
		}
		// console.log(window.getComputedStyle(document.getElementById("right-menu")).right);

	});
});