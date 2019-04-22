'use strict'

class NoteController {

	async writeNote({
		view
	}) {
		return view.render('user.write');
	}

	async readNote({
		view
	}) {
		return view.render('user.note');
	}

	async getAllNote({
		view
	}) {
		return view.render('user.home');
	}
}
module.exports = NoteController