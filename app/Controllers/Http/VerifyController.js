'use strict'
const Database = use('Database')
const User = use('App/Models/User');
class VerifyController {
	async index({ view, request }) {
		// return view.render('email.verify')
		return view.render('email.verify', await this.verify(request))
	}
	async verify(request) {
		const mongoClient = await Database.connect()
		const data = request.all();
		const result = await mongoClient.collection('users').find({ email: data.e }, { verified: data.q }).toArray()

		let status = "fail"
		if (result.length == 1) {
			status = "true"
			result[0].verified = "true"
			await mongoClient.collection('users').update({ email: data.e }, result[0])
		}
		console.log(result[0]);

		return {
			status: status,
			result: result[0],
			tes: "tes again"
		}
	}
}

module.exports = VerifyController
