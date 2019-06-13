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
const Helpers = use('Helpers')

Route.get('/', 'NoteController.all').as('notesGate').middleware(['user'])

Route.group(() => {
	Route.get('/write/:note', 'NoteController.write')
	Route.get('/write/', 'NoteController.write')
	Route.post('/write/', 'NoteController.write')
	
	Route.get('/read/:note', 'NoteController.read')
	Route.get('/get', 'NoteController.get')
	Route.get('/all', 'NoteController.all')
	Route.post('/save', 'NoteController.save')
	Route.post('/upload', 'NoteController.upload')
}).prefix('/note').middleware(['user'])

Route.group(() => {
	Route.get('/', 'BoardController.all')
	Route.post('/add', 'BoardController.add')
	Route.get('/open/:board', 'BoardController.open')
	Route.post('/upload/:id', 'BoardController.upload')
}).prefix('/board').middleware(['user'])

Route.group(() => {
	Route.get('/', 'LoginController.index')
	Route.post('/store', 'LoginController.store').validator('Login')
	Route.post('/logout', 'LoginController.destroy')
}).prefix('/login')

Route.group(() => {
	Route.get('/', 'RegisterController.create')
	Route.post('/store', 'RegisterController.store').validator('Register')
	Route.post('/confirm', 'RegisterController.update')
}).prefix('/register')

Route.group(() => {
	Route.on('/mail').render('email.welcome')
	Route.post('/verify/', 'VerifyController.verify')
	Route.get('/verify/', 'VerifyController.index')
}).prefix('/feature')

Route.group(() => { 
	Route.get('/', 'SettingController.index')
	Route.post('/update', 'SettingController.update')

 }).prefix('/setting')

Route.post('/test', 'TestController.index')
Route.post('/show', 'TestController.show')
Route.post('/getOne/:params', 'TestController.getOne')
