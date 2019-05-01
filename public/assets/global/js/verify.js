$(document).ready(function () {
	var i = 0;
	var speed = 50; /* The speed/duration of the effect in milliseconds */
	let id = "";

	function typeWriter() {
		if (i < text.length) {
			if (text.charAt(i) === '<') {
				id = text.substring(i + 1, i + 3);
				i += 4;
			} else {
				document.getElementById(id).innerHTML += text.charAt(i);
				i++;
			}
			setTimeout(typeWriter, speed);
		} else {
			window.location = "http://127.0.0.1:3333/"
		}
	}

	typeWriter();
});