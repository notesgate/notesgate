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

Route.get('/', 'NoteController.all').as('notesGate')
Route.get('/board', 'BoardController.getAllBoard').as('board')
Route.get('/write', 'NoteController.writeNote').as('write')


Route.group(() => {
	Route.get('/write', 'NoteController.write')
	Route.get('/read', 'NoteController.read')
	Route.get('/get', 'NoteController.get')
	Route.get('/all', 'NoteController.all')
	Route.post('/save', 'NoteController.save')
}).prefix('/note')


Route.group(() => {
	Route.get('/', 'LoginController.index')
	Route.post('/store', 'LoginController.store').validator('Login')
}).prefix('/login');


Route.group(() => {
	Route.post('/', 'RegisterController.create')
	Route.post('/store', 'RegisterController.store').validator('Register')
}).prefix('/register');



Route.post('/test', 'TestController.index')
Route.post('/show', 'TestController.show')
Route.post('/getOne/:params', 'TestController.getOne')