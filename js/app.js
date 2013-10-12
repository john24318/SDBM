define(['chui', 'modules/home/js/home'], function($, HomeView) {
	'use strict';
	var init = function(){
		/* 
		 * 1.create SDBM sqlite db if not exists
		 * 2.load data folder to model
		 * 3.render home view
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