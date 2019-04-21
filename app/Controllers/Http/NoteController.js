'use strict'

class NoteController {
	async readNote({
		view
	}) {
		return view.render('user.note');
	}
}
module.exports = NoteController