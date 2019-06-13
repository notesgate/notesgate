'use strict'
const Note = use("App/Models/Note")
const Database = use('Database')
const Helpers = use('Helpers')
class NoteController {

	async all({
		view
	}) {
		const note = await Note.all()
		const data = note.toJSON();
		// console.log("getnote", data);
		data.write = "active"
		data.board = "nav-item"
		data.trash = "nav-item"
		data.setting = "nav-item"
		return view.render('user.home', {
			notes: data , search:"Search Note"
		});
	}
	async get({
		auth,
		view
	}) {
		const note = await Note.all()
		// console.log("getnote", note);

		return view.render('user.home', {
			'note': 's'
		});
	}

	async read({
		auth,
		params,
		request,
		response,
		view
	}) {

		const note = await Note.where({
			_id: params.note
		}).fetch()

		let data = note.toJSON();
		console.log('data :',data)
		console.log('data-section :',data[0].section)
		data[0].lable = data[0].lable.substr(1, data[0].lable.length - 2).split(',')
		console.log('lable :',data[0].lable)
		data[0].own = "false"

		if (data[0].user_id == auth.user._id) {
			data[0].own = "true"
		}
		console.log('send :', data[0].section)
		return view.render('user.note', {
			note: data
		});
	}



	async save({
		auth,
		request,
		response
	}) {
		var ObjectId = require('mongodb').ObjectID;
		let data = {
			title: request.body.title,
			lable: request.body.lable,
			desc: request.body.desc,
			section: request.body.section,
			user_id: auth.user._id,
			face:{}
		}
		let a=0,b=0
		for (let index = 0; index < request.body.section.length; index++) {
			if(a==1 && b==1){
				break;
			}
			if(a==0){
				if(request.body.section[index].flag==="section-text"){
					data.face.text=request.body.section[index].val[0];
					a=1;
				}
			}
			if(b==0){
				if(request.body.section[index].flag==="section-image"){
					data.face.img=request.body.section[index].val;
					b=1;
				}
			}
		}
	
		if(request.body.id!=="undefined"){
			const mongoClient = await Database.connect()
			await mongoClient.collection('notes').update({ _id: ObjectId(request.body.id) }, data,{ upsert: true })
			console.log('update :',"update");
		}else{
			console.log('insert :',"insert");
			const note = new Note(data)
			note.save()
		}
		console.log('data :', data);
		response.send({
			message: "nize"
		});
	}


	async upload({
		auth,
		request,
		response
	}) {
		const profilePic = request.file('profile_pic', {
			types: ['image'],
		})
		await profilePic.move(Helpers.publicPath('notes/images'), {
			name: auth.user._id+request.body.var+"."+profilePic.extname,
			overwrite: true
		})
		
		if (!profilePic.moved()) {
			console.log('fail :', "fail");
			return profilePic.error()
		}
		
		response.send({
			message: "File moved"
		});
	}
	async write({
		params,
		view
	}) {
		// console.log("params", params.note);

		if (params.note) {
			// console.log("edit true");

			const note = await Note.where({
				_id: params.note
			}).fetch()
			let data = note.toJSON();
			let countImg=0;
				data[0].countImg=0;
			data[0].section.forEach(element => {
				if(element.flag==="section-image"){
					console.log('element.flag :', element.flag);
					data[0].section[countImg].id="img"+data[0].countImg;
					data[0].countImg++;
				}
				countImg++;
			});
			data[0].lable = data[0].lable.substr(1, data[0].lable.length - 2).split(',')
			console.log('data ss :', data[0].section);
			return view.render('user.write', {
				note: data
			});
		} else {

			return view.render('user.write', {
				'note': 'pyramid.png'
			});
		}
	}
}
module.exports = NoteController