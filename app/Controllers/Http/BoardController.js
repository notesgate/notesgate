'use strict'

class BoardController {
	async getAllBoard({
		view
	}) {
		let data=[]
		data.write="nav-item"
		data.board="active"
		data.trash="nav-item"
		data.setting="nav-item"
		return view.render('user.board', { notes: data });
	}
}

module.exports = BoardController