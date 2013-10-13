define(function(){
	var Module = function(attrs) {
		var default = {
			'id': 0,
			'name': '',
			'nav_id': '',
			'displayname', ''
			'dependencies': []
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

	return Module;
});