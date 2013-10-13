define(function(){
	var User = function(attrs) {
		var default = {
			'username': '',
			'password': '',
			'email': '',
			'status': 0
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

	return User;
});