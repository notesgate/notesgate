$(document).ready(function () {

	$('#buttonSave').on('click', function () {
		let rawNote = $(".note");
		let note = {
			title: "",
			lable: "",
			desc: "",
			section: []
		};

		for (let node = 0; node < rawNote.length; node++) {
			let attr = $(rawNote[node]).data("note");
			let temp = getData(rawNote[node], attr);
			if (attr === "section-text") {
				var parent = rawNote[node].parentNode;
				// The equivalent of parent.children.indexOf(child)
				var index = Array.prototype.indexOf.call(parent.children, rawNote[node]);
				console.log("index", index);
				let data = {
					flag: attr,
					val: temp
				}
				note.section.push(data)

			} else {
				note[attr] = temp;
			}
		}
		// console.log("note", note);

		$.post('/note/save', note, data => console.log(data));

	});


	$('.note-btn-section').on('click', function () {
		let html = '<p class="note text-note text-content" contenteditable="true" data-note="section-text">New Section</p>';
		$('#editor').append(html);
	});

	function getData(params, flag) {
		// console.log("flag", flag);

		switch (flag) {
			case "title":
			case "desc":
			case "section-text": return clearText($(params)[0].innerText);
			case "lable": return getLable(params);
			default:
				break;
		}

	}

	function getLable(params) {
		let text = $(params)[0].innerText.split(" ");
		let parse = "[";
		text.forEach(element => {
			let rg = /([A-Za-z-_])\w+/g;
			parse += element.match(rg)[0] + ",";

		});
		parse = parse.slice(0, -1) + "]";
		return parse;
	}

	function clearText(params) {
		return params.trim();
	}
});