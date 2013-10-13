define(['chocolatechip', 'models/module/moduleModel'], function($, Module){
	var Modules = function(){
		var self = new Array();

		//fetch json file
		self.fetch = function(json_file){
			$.getJSON(json_file, function(data){
				data.forEach(function(model){
					var item = new Module({'name': model.name, 'nav_id': model.nav_id, 'displayname': model.displayname});
					
					//load modules package.json to get dependencies
					var tmpPackageUrl = '/modules/' + item.name + '/package.json';
					$.getJSON(tmpPackageUrl, function(module_json){
						if(item.name === module_json.module_name){
							item.dependencies = module_json.dependencies;
						}
					});

					self.push(item);
				});
			});
		}

		return self;
	}

	return Modules;
});
