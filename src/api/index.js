import Router from '@koa/router';

const api = new Router();


import apiCtrl from './api.controller';

api.POST( '/api/user', apiCtrl.signup); //signupAPI
api.GET( '/api/user', apiCtrl.profile); //profileAPI
api.GET( '/api/user/:id', apiCtrl.userProfile); //userProfileAPI
api.DELETE( '/api/user', apiCtrl.deleteUser); //deleteUserAPI
api.PATCH( '/api/user', apiCtrl.changeProfile); //changeProfileAPI
api.GET( '/api/duplicate', apiCtrl.duplicateCheck); //duplicateCheckAPI
api.POST( '/api/verification', apiCtrl.emailVerificationSend); //emailVerificationAPI
api.GET( '/api/verification', apiCtrl.emailVerificationCheck); //emailVerificationAPI
api.POST( '/api/login', apiCtrl.login); //loginAPI
api.POST( '/api/refresh', apiCtrl.refreshAccesToken); //refresh accestokenAPI



module.exports = api;