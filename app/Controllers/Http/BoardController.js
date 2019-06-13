const Board = use("App/Models/Board")
const Note = use("App/Models/Note")

const Database = use('Database')
const Helpers = use('Helpers')
class BoardController {
	
	async add({
		auth,
		request,
		response
	}){
		var ObjectId = require('mongodb').ObjectID;
		let data = {
			board:request.body.board,
			notes:[ObjectId(request.body.id)],
			user_id: auth.user._id,
			image:""
		}
		var note=ObjectId(request.body.id);
		const board = await Board.where({
			user_id: ObjectId(auth.user._id),
			board:request.body.board
		}).fetch()

		if(board.toJSON().length==0){
			const newBoard = new Board(data)
			newBoard.save()
		}else{
			const mongoClient = await Database.connect()
			console.log('board._id :', board.toJSON()[0]._id);
			await mongoClient.collection('boards').update({_id: ObjectId(board.toJSON()[0]._id)},{$push : {notes:note}},{ upsert: true })
		}

	}

	async all({
		auth,
		view
	}) {
		var ObjectId = require('mongodb').ObjectID;
		const board = await Board.where({user_id:ObjectId(auth.user._id)}).fetch()
		const data = board.toJSON();

		data.write="nav-item"
		data.board="active"
		data.trash="nav-item"
		data.setting="nav-item"
	
		return view.render('user.board', { boards: data,search:"Search Board"});
	}

	async open({
		auth,
		view,
		params,
		request,
		response
	}){

		
		var ObjectId = require('mongodb').ObjectID;
		const board = await Board.where({_id:ObjectId(params.board)}).fetch()
		const data_board = board.toJSON();
		let data_query=[]
		for (const key in data_board[0].notes) {
			if (data_board[0].notes.hasOwnProperty(key)) {
				 data_query.push( ObjectId (data_board[0].notes[key]));
			}
		}

		const mongoClient = await Database.connect()
		const data=await mongoClient.collection('notes').find({ _id: { $in:data_query}}).toArray()
		// const data_notes = notes.toJSON();

		// const note = await Note.all()
		// const data = note.toJSON();
		// console.log("getnote", data);

		data.write = "active"
		data.board = "nav-item"
		data.trash = "nav-item"
		data.setting = "nav-item"
		data.idBoard=data_board[0]._id;
		return view.render('user.notes', { notes: data ,search:"Search "+data_board[0].board,image:data_board[0].image});
	}

	async upload({
		auth,
		view,
		params,
		request,
		response
	}){
		var ObjectId = require('mongodb').ObjectID;

		const profilePic = request.file('profile_pic', {
			types: ['image'],
		})
		await profilePic.move(Helpers.publicPath('notes/boards'), {
			name: auth.user._id+params.id+"."+profilePic.extname,
			overwrite: true
		})

		
		if (!profilePic.moved()) {
			console.log('fail :', "fail");
			return profilePic.error()
		}
		const mongoClient = await Database.connect()
		await mongoClient.collection('boards').update({ _id: ObjectId(params.id) } ,{$set:{image:auth.user._id+params.id+"."+profilePic.extname}})
		console.log('mongoClient :', mongoClient);
		response.send({
			message: "File moved"
		});
	}
}

module.exports = BoardController