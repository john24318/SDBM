define(['chocolatechip', 'text!modules/home/template/home.tmpl.html'], function($, home){
	'use strict';
	
	var HomeView = {
		template: function(data){
			return $.template(home)(data);
		},
		preload: function(data){
			
		}
	}
	
	return HomeView;
});
