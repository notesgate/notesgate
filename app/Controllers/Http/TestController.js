'use strict'

const User = use('App/Models/User');
class TestController {
	async index({
		request,
		response
	}) {
		const {
			name,
			email,
			password
		} = request.only(['name', 'email', 'password']);

		let data = { 'name': "zikri", 'email': "muammar.clasci@gmail.com", 'password': "kode-48MZA" };
		const user = await User.create({
			data
		});
		return response.send({
			message: "nize"
		});
	}
	show({
		params
	}) {
		return {
			id: params.id
		}

	}
}

module.exports = TestController