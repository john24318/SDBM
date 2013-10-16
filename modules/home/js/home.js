define(['chui', 'text!modules/home/template/index.tmpl.html'], function($, home){
	'use strict';
	
	var HomeView = $.View.extend({
		//render template html
		template: function(data){
			return $.template(home)(data);
		},

		preload_handler: function(){
			$('li[data-goto]').each(function(item){
				var nav_id = $(item).attr('data-goto');
				if( nav_id.indexOf('-article') !== -1 ){
					var module_name = nav_id.substring(0, nav_id.indexOf('-article'));
					var template_url = 'modules/' + module_name + '/template/index.tmpl.html';
					
					$(item).on('click', function(){
						if ( $('#'+nav_id).length === 0 ) {
							require(['chui', 'text!' + template_url], function($, module){
								var module_template = $.template(module)(item);
								$('body').append(module_template);
								//must re-bind body when loaded template
								$.applyBindings();
							});
						}	
					});
				}
			});
		}
	});
	
	return HomeView;
});
