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

		let data = { 'name': "", 'email': "", 'password': "" };
		const user = await User.create({
			data
		});
		return response.send({
			message: "nize"
		});
	}
	async show({
		params, response
	}) {
		const data = await User.all();

		return response.send({
			data: data
		});

	}

	async getOne({ params, response }) {
		const user = await User.where({ name: params.params }).fetch()
		console.log(params.params)

		return response.send({
			data: user
		});
	}
}

module.exports = TestController
