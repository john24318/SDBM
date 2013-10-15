define(['chui', 'text!modules/login/template/index.tmpl.html', 'text!modules/login/template/register.tmpl.html', 'text!modules/login/template/forgot.tmpl.html'], function($, login, register, forgot){
	'use strict';
	
	var LoginView = $.View.extend({
		template: function(data){
			return $.template(register)(data);
		}
	});
	
	return LoginView;
});
