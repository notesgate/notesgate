$(document).ready(function () {
	var count=0;
	$('.menu-editor').on('click', function (e) {

		
	});
	$('.menu-side').on('click', function (e) {
		let menu=e.target.getAttribute('data-menu');
		switch (menu) {
			case "h1":
				headerHTML("font-header-1");
				break;
			case "h2":
				headerHTML("font-header-2");
				break;
			case "h3":
				headerHTML("font-header-3");
				break;
			case "bold":
				fontStyle("bold");
				break;
			case "italic":
				fontStyle("italic");
				break;
			case "underline":
				fontStyle("underline");
				break;
			case "align-left":
				textStyle("left");
				break;
			case "align-center":
				textStyle("center");
				break;
			case "align-right":
				textStyle("right");
				break;
			case "align-justify":
				textStyle("justify");
				break;
			case "subscript":
				textStyle("subscript");
				break;
			case "superscript":
				textStyle("superscript");
				break;
			default:
				break;
		}
	});


});