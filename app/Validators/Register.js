'use strict'

class Register {
	get rules() {
		return {
			email: 'required|email|unique:users',
			username: 'required|unique:users',
			name: 'required|min:2|max:30',
			password: 'required|min:5|confirmed',
		}
	}

	get messages() {
		return {
			'email.required': 'The email field is required',
			'email.email': 'Enter a valid email address',
			'email.unique': 'Email already exists',
			'username.required': 'The username field is required',
			'username.unique': 'Username already exists',
			'name.required': 'The name field is required',
			'name.min': 'name must be > 2 character',
			'name.max': 'name must be < 30 character',
			'password.required': 'The password field is required',
			'password.min': 'The password field must be at least 5 characters',
			'password.confirmed': 'The password fields do not match',
		}
	}
	async fails(errorMessages) {
		return this.ctx.response.send(errorMessages)
	}
}

module.exports = Register
