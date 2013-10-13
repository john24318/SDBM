define(function(){
	var User_Module = function(attrs) {
		var default = {
			'id': 0,
			'user_id': '',
			'module_id': '',
			'enable': 0
		}

		if(typeof attrs === 'object'){
			Object.keys(attrs).forEach(function(name){
				if (default.hasownproperty(name)) {
					default[name] = attrs[name];
				}
			});
		}

		return default;
	}

	return User_Module;
});