define(function(){
	var User_Module = function(attrs) {
		var defaults = {
			'id': 0,
			'user_id': '',
			'module_id': '',
			'enable': 0
		}

		if(typeof attrs === 'object'){
			Object.keys(attrs).forEach(function(name){
				if (defaults.hasOwnProperty(name)) {
					defaults[name] = attrs[name];
				}
			});
		}

		return defaults;
	}

	return User_Module;
});