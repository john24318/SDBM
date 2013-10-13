define(['chocolatechip', 'models/user/user_moduleModel'], function($, User_Module){
	var User_Modules = function(){
		var self = new Array();

		//fetch json file
		self.fetch = function(json_file){
			$.getJSON(json_file, function(data){
				data.forEach(function(model){
					var item = new User_Module({'user_id': model.user_id, 'module_id': model.module_id, 'enable': model.enable});
					self.push(item);
				}
			});
		}

		return self;
	}

	return User_Modules;
});
