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

Route.get('/', 'NoteController.getAllNote')
Route.get('/board', 'BoardController.getAllBoard')
Route.get('/write', 'NoteController.writeNote')


Route.on('/notes').render('user.notes')
Route.get('/note/read', 'NoteController.readNote')
Route.post('/test', 'TestController.index')