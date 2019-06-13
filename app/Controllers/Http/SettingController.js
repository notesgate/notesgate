'use strict'

class SettingController {
    async index({request,response,view}){
        // console.log("Nices")
        return view.render('user.settings',{
            title: 'NotesGate | Setting'
        });
    }

    async update({request,response,view,params,session,auth}) {
        console.log(auth);

    }
}

module.exports = SettingController
