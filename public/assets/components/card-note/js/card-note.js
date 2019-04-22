function read(params) {
	console.log(params);

	let desc = $(params).data('note').id;
	let data = $(params).data('note').text;

	window.location.href = "/note/read?" + desc + "@" + data;
}