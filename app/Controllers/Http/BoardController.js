'use strict'

class BoardController {
	async getAllBoard({
		view
	}) {
		return view.render('user.board');
	}
}

module.exports = BoardController