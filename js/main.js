require.config({
	paths: {
		chocolatechip:	'vendor/chui/chocolatechip-3.0.4',
		chui:			'vendor/chui/chui-3.0.4',
		jquery: 		'vendor/jquery/jquery-2.0.3',
		backbone:		'vendor/backbone/backbone',
		text:			'vendor/require/text',
		modules:		'../modules',
		models:			'../models'
	},
	shim: {
		'ChocolateChip': {
			exports: '$'
		},
		'chui': {
			deps: ['chocolatechip'],
			exports: '$'
		},
		backbone: {
			deps: ['chocolatechip'],
			exports: 'Backbone'
		}
	}
});

//load app.js and bootstrapping application
define(['app'], function(app) {
	app.initialize();
});
