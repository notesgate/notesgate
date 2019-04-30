'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const User = use('App/Models/User')
/**
 * Resourceful controller for interacting with logins
 */
class LoginController {
	/**
	 * Show a list of all logins.
	 * GET logins
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async index({ request, response, view }) {
		return view.render('user.login');

	}

	/**
	 * Render a form to be used for creating a new login.
	 * GET logins/create
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async create({ request, response, view }) {
	}

	/**
	 * Create/save a new login.
	 * POST logins
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async store({ request, auth, session, response }) {
		const email = request.input('email')
		const password = request.input('password')
		const user = await User.where({ email: email }, { password: password }).fetch()
		let data = user.toJSON();
		if (data.length == 1) {
			// TODO auth
			await auth.attempt(email, password);
			console.log('to');
			console.log(data);

			return response.route('/');

		}

		session.flash({ type: 'info', message: 'This is the message' })
		return response.redirect('back')

	}

	/**
	 * Display a single login.
	 * GET logins/:id
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async show({ params, request, response, view }) {
	}

	/**
	 * Render a form to update an existing login.
	 * GET logins/:id/edit
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async edit({ params, request, response, view }) {
	}

	/**
	 * Update login details.
	 * PUT or PATCH logins/:id
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async update({ params, request, response }) {
	}

	/**
	 * Delete a login with id.
	 * DELETE logins/:id
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async destroy({ params, request, response }) {
	}

	async login(request, response) {
		const flag = await User.where({ email: request.input('email') }).fetch()
		if (flag.toJSON().length == 1) {

		}
	}
}

module.exports = LoginController
