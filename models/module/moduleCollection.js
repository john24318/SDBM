define(['chui', 'models/module/moduleModel'], function($, Module){
	'use strict';

	var Modules = function(){
		var self = new Array();

		//fetch json file
		self.fetch = function(json_file){
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

						self.push(item);
					});
				}
			});
		}

		return self;
	}

	return Modules;
});
