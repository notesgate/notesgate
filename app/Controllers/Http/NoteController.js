'use strict'
const Note = use("App/Models/Note")
class NoteController {

	async write({
		view
	}) {
		return view.render('user.write');
	}

	async read({
		view
	}) {
		return view.render('user.note');
	}

	async get({
		auth, view
	}) {
		return view.render('user.home');
	}

	async all({
		view
	}) {
		return view.render('user.home');
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