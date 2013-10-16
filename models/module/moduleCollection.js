define(['chui', 'models/module/moduleModel'], function($, Module){
	'use strict';

	var Modules = $.Collection.extend({
		//fetch json file
		fetch: function(json_file){
			var array = new Array();

			$.getJSON(json_file, function(data){
				if (data instanceof Array) {
					data.forEach(function(obj){
						var item = new Module({'name': obj.name, 'nav_id': obj.nav_id, 'displayname': obj.displayname});
						
						//load modules package.json to get dependencies
						var tmpPackageUrl = '/modules/' + item.name + '/package.json';
						$.getJSON(tmpPackageUrl, function(module_json){
							if(item.name === module_json.module_name){
								item.dependencies = module_json.dependencies;
							}
						});

						array.push(item);
					});
				}
			});
			
			return array;
		}

	});

	return Modules;
});
