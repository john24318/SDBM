define(['chui', 'modules/home/js/home'], function($, HomeView) {
	'use strict';
	var init = function(){
		/* 
		 * 1.setup SDBM db
		 * 2.load data to model, and then insert to db
		 * 3.create folders in modules directory
		 * 4.render home view
		 */
		 var homeObj = {
			'menu': [
			{
				'id': 'master-article',
				'text': 'Master',
				'class': ''
			},
			{
				'id': 'demand-article',
				'text': 'Demand',
				'class': ''
			},
			{
				'id': 'supply-article',
				'text': 'Supply',
				'class': ''
			},
			{
				'id': 'wo-article',
				'text': 'WO',
				'class': ''
			},
			{
				'id': 'report-article',
				'text': 'Report',
				'class': ''
			},
			{
				'id': 'fht-article',
				'text': 'FHT',
				'class': ''
			},
			{
				'id': 'admin-article',
				'text': 'Administrator',
				'class': ''
			}
			]}

		$('body').append(HomeView.template(homeObj.menu));
	};

	return {
		initialize: init
	}
});