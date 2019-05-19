'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const User = use('App/Models/User')
const Mail = use('Mail')
const Encryption = use('Encryption')
/**
 * Resourceful controller for interacting with registers
 */
class RegisterController {
	/**
	 * Show a list of all registers.
	 * GET registers
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async index({ request, response, view }) {
	}

	/**
	 * Render a form to be used for creating a new register.
	 * GET registers/create
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async create({ request, response, view }) {
		return view.render('user.register', {
			title: 'NotesGate | Register'
		});
	}

	/**
	 * Create/save a new register.
	 * POST registers
	 * User yang melakukan register akan disimpan pada collection user
	 * Kedaan awal user yang baru mendaftar adalah not verified
	 * 
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * 
	 * @see MailController
	 */
	async store({ request, session, response, view }) {
		let hashCode = Encryption.encrypt(request.input('password') + request.input('name'))
		console.log(hashCode);

		const user = await User.create({
			email: request.input('email'),
			username: request.input('username'),
			name: request.input('name'),
			password: request.input('password'),
			verified: hashCode
		})

		// user.save()
		session.flash({ type: 'info', message: 'This is the message' })
		await Mail.send('email.welcome', user.toJSON(), (message) => {
			message
				.to(user.email)
				.subject('Welcome to NotesGate')
		})

		return response.redirect('/login')
	}

	/**
	 * Display a single register.
	 * GET registers/:id
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async show({ params, request, response, view }) {
	}

	/**
	 * Render a form to update an existing register.
	 * GET registers/:id/edit
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async edit({ params, request, response, view }) {
	}

	/**
	 * Update register details.
	 * PUT or PATCH registers/:id
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async update({ params, request, response }) {
	}

	/**
	 * Delete a register with id.
	 * DELETE registers/:id
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async destroy({ params, request, response }) {
	}
}

module.exports = RegisterController
