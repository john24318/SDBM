define(function(){
	var User = function(attrs) {
		var defaults = {
			'username': '',
			'password': '',
			'email': '',
			'status': 0
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

	return User;
});