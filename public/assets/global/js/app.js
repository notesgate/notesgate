$(document).ready(function () {
	// cursor 
	var el = $("'.focus-content")[0];
	var range = document.createRange();
	var sel = window.getSelection();
	range.setStart(el, $(el).text().lenght);
	range.collapse(true);
	sel.removeAllRanges();
	sel.addRange(range);
	console.log($(el).text().len);

});