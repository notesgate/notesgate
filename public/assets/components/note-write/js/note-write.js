$(document).ready(function () {
	var counterUniq=0;
	$('#buttonSave').on('click', function () {
		const timestamp = new Date() / 1000;
		let rawNote = $(".note");
		console.log('rawNote :', rawNote);
		let note = {
			id:"undefined",
			title: "",
			lable: "",
			desc: "",
			section: []
		};
		let id=document.getElementById('editor').getAttribute('data-id')
		if(id!=="undefined"){
			note.id=id;
		}
		let flagSection=1;
		let tmpdata=[];
		for (let node = 0; node < rawNote.length; node++) {
			let attr = $(rawNote[node]).data("note");
			let temp = getData(rawNote[node], attr);
			if (attr === "section-text") {
				let parent = rawNote[node].parentNode;
				// The equivalent of parent.children.indexOf(child)
				// let index = Array.prototype.indexOf.call(parent.children, rawNote[node]);
				tmpdata.push(temp)
				
				if(flagSection++%2==0){
					let data = {
						flag: attr,
						val: tmpdata
					}
					console.log(tmpdata);
					console.log('data :', data);
					note.section.push(data)
					tmpdata=[];
				}
				console.log('tmpdata :', tmpdata);
			}else if (attr === "section-image") {
				let uniq = new Date().getTime()+counterUniq++;
				console.log('temp.id :', temp.id);
				console.log('temp.id :', temp);
				let ext= getExtention("input_"+temp.id);
				let data = {
					flag: attr,
					val: uniq+"."+ext
				}
				uploadImage(temp,uniq);

				note.section.push(data)
			}else if(attr === "section-image-src"){
				let data = {
					flag: "section-image",
					val: $(rawNote[node]).data("img")
				}
				console.log('section-image-src :', data);
				note.section.push(data)
			}else {
				note[attr] = temp;
			}
		}
		console.log('saveTo :', note);
		$.post('/note/save', note, data => console.log(data));
	});

	function uploadImage(image,u){
		let target_id=image.id;
		let form = document.getElementById('input_'+target_id).parentNode;  
		let formSend=new FormData(form);
			formSend.append('var', u);
		$.ajax({
			url: '/note/upload',
			type:"post",
			data:formSend,
			processData:false,
			contentType:false,
			cache:false,
			async:false,
			success: function(data){
				console.log('sc :', data)
			},
			error: function(data){
				console.log('er :', data)
			}
		});
	}

	function getData(params, flag) {
		switch (flag) {
			case "title":
			case "desc":
			case "section-text":
				return clearText($(params)[0].innerHTML);
			case "lable":
				return getLable(params);
			case "section-image":
				return params;
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
		console.log('params :', params);
		console.log('params :', params.trim());
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
	
	function getExtention(e){
		console.log('getExtention :', e);
		let a=document.getElementById(e).value.split('.')
		return a[a.length-1];
	}
});
