'use strict'

class Login {
	get rules() {
		return {
			email: 'required|email',
			password: 'required'
		}
	}
	get messages() {
		return {
			'email.required': 'The email field is required',
			'email.email': 'Enter a valid email address',
			'password.required': 'The password field is required'
		}
	}
	async fails(errorMessages) {
		return this.ctx.response.send(errorMessages)
	}
}

module.exports = Login
