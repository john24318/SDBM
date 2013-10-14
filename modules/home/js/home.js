define(['chocolatechip', 'text!modules/home/template/index.tmpl.html'], function($, home){
	'use strict';
	
	var HomeView = {
		//render template html
		template: function(data){
			return $.template(home)(data);
		},

		//render data-goto template html
		preload: function(data){
			var html = '';

			data.forEach(function(item){
				var module_name = item.nav_id.substring(0, item.nav_id.indexOf('-article'));
				var template_url = 'modules/' + module_name + '/template/index.tmpl.html';
				// var reader = new FileReader();
				// reader.readAsText(template_url);
				require(['chui', 'text!' + template_url], function($, module){
					var module_template = $.template(module)(item);
					$('body').append(module_template);
					//must re-bind body when loaded template
					$.applyBindings();
				});
				
			});

			return html;
		}
	}
	
	return HomeView;
});
