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

	$('#block-menu').on('click', function () {
		let element = $('.show-menu');

		for (let index = 0; index < element.length; index++) {

			$(element[index]).data('flag', "show");
			$(element[index]).removeClass('show-menu');

		}

		$(this).removeClass('fade-menu');
	});
});
function fontStyle(params) {
	if ($(params).data('flag') == "show") {
		var rect = params.getBoundingClientRect();
		console.log(rect.top, rect.right, rect.bottom, rect.left);

		$(params).css('width', rect.bottom + (rect.bottom * (19 / 100)));
		$(params).addClass('show-menu');
		$(params).data('flag', "hide");
		$('#block-menu').addClass('fade-menu');

		$(params).prepend('<button class="menu" type="button">B</button>');
		$(params).prepend('<button class="menu" type="button">B</button>');
		$(params).prepend('<button class="menu" type="button">B</button>');



	} else {
		$(params).data('flag', "show");
		$(params).removeClass('show-menu');
		console.log(params.id + ' .menu', $(params.id + ' .menu'));

		$("#" + params.id + ' .menu').remove();
		if ($('.show-menu').length == 0) {
			$('#block-menu').removeClass('fade-menu');
		}


	}
}
function openTemp(params, id) {
	if ($(params).data('flag') == "show") {
		// $(params).parent().addClass('show-menu')

		$(params).prepend('<button type="button">B</button>');
		// $(params).data('flag', "hide");

		// $('#block-menu').addClass('fade-menu');

	} else {
		$(params).data('flag', "show");
		$(params).parent().removeClass('show-menu');
		if ($('.show-menu').length == 0) {
			$('#block-menu').removeClass('fade-menu');
		}

	}
}