'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', 'NoteController.all').as('root')
Route.get('/board', 'BoardController.getAllBoard')
Route.get('/write', 'NoteController.writeNote')


Route.group(() => {
	Route.get('/note/write', 'NoteController.write')
	Route.get('/note/read', 'NoteController.read')
	Route.get('/note/get', 'NoteController.get')
	Route.get('/note/all', 'NoteController.all')
	Route.post('/note/save', 'NoteController.save')
})


Route.group(() => {
	Route.get('/login', 'LoginController.index')
	Route.post('/login/store', 'LoginController.store').validator('Login')
})


Route.group(() => {
	Route.get('/register', 'RegisterController.create')
	Route.post('/register/store', 'RegisterController.store').validator('Register')
})

Route.post('/test', 'TestController.index')
Route.post('/show', 'TestController.show')
Route.post('/getOne/:params', 'TestController.getOne')