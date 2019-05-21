'use strict'
const Note = use("App/Models/Note")
class NoteController {

	async write({
		params,
		view
	}) {
		console.log("params", params.note);

		if (params.note) {
			console.log("edit true");

			const note = await Note.where({ _id: params.note }).fetch()
			let data = note.toJSON();
			data[0].lable = data[0].lable.substr(1, data[0].lable.length - 2).split(',')
			console.log(data);

			return view.render('user.write', { note: data });
		} else {
			console.log("edit false");

			return view.render('user.write');
		}
	}

	async read({
		auth,
		params,
		request,
		response,
		view
	}) {

		const note = await Note.where({ _id: params.note }).fetch()
		let data = note.toJSON();
		data[0].lable = data[0].lable.substr(1, data[0].lable.length - 2).split(',')
		// console.log(data);
		data[0].own = "false"

		if (data[0].user_id == auth.user._id) {
			data[0].own = "true"
		}
		return view.render('user.note', { note: data });
	}

	async get({
		auth, view
	}) {
		const note = await Note.all()
		// console.log("getnote", note);

		return view.render('user.home', { 'note': 's' });
	}

	async all({
		view
	}) {
		const note = await Note.all()
		const data = note.toJSON();
		// console.log("getnote", data);
		data.write="active"
		data.board="nav-item"
		data.trash="nav-item"
		data.setting="nav-item"
		return view.render('user.home', { notes: data });
	}

	async save({ auth, request, response }) {

		// const data = await Note.find()
		// console.log("data", data)
		let data = {
			title: request.body.title,
			lable: request.body.lable,
			desc: request.body.desc,
			section: request.body.section,
			user_id: auth.user._id
		}
		// data.user_id = ObjectId(auth.user._id)
		console.log("sss", data)
		const note = new Note(data)
		note.save()
		// await note.save()
		// const proc = await Note.where({ "zikri": { $exists: true, $not: null } })
		// console.log("request", request.body.title);
		// console.log("response", request.note);

		response.send({
			message: "nize"
		});
		// await note.save()
	}
}
module.exports = NoteController