define(['chui'], function($){
	'use strict';

	var Module = $.Model.extend({
		'id': 0,
		'name': '',
		'nav_id': '',
		'displayname': '',
		'version': 0.0,
		'author': '',
		'release_date': '',
		'dependencies': []
	});

	return Module;
});