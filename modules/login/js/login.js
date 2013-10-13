define(['chocolatechip', 'text!modules/login/template/register.tmpl.html'], function($, register, login, forgot){
	'use strict';
	
	var LoginView = {
		template: function(data){
			return $.template(register)(data);
		}
	}
	
	return LoginView;
});
