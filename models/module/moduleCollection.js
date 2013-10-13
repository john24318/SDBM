define(['chocolatechip', 'models/module/moduleModel'], function($, Module){
	var Modules = function(){
		var self = new Array();

		//fetch json file
		self.fetch = function(json_file){
			$.getJSON(json_file, function(data){
				data.forEach(item){
					item = new Module({'name': item.name, 'nav_id': iten.nav_id, 'displayname': item.displayname});
					
					//load modules package.json to get dependencies
					var tmpPackageUrl = '/modules/' + item.name + '/package.json';
					$.getJSON(tmpPackageUrl, function(module_data){
						if(module_data[0][module_name] === item.name){
							item.dependencies = module_data[0][dependencies];
						}
					});

					self.push(item);
				}
			});
		}

		return self;
	}

	return Modules;
});
