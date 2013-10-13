define(function(){
	var Module = function(attrs) {
		var defaults = {
			'id': 0,
			'name': '',
			'nav_id': '',
			'displayname': '',
			'version': 0.0,
			'author': '',
			'release_date': '',
			'dependencies': []
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

	return Module;
});