define(['chui', 'modules/login/js/login', 'modules/home/js/home'], function($, LoginView, HomeView) {
	'use strict';
	var init = function(){
		/* 
		 * 1.check app.config installed, if is false:
		 *     a.setup SDBM db
		 *     b.fetch data to model, and then insert to db;
		 *   if is true:
		 *     a.load data from db
		 * 2.check modules table from db, if has new module:
		 *     a.update modules tables by its package.json
		 *     b.update app.config
		 * 3.check users table from db, if users is empty:
		 *     a.display create user screen
		 *   if has user:
		 *     check if any user is enable, if true:
		 *       check app_status table, if is empty:
		 *         a.display login screen
		 *       if last_user_id and auto_login are true:
		 *         a.goto step 3
		 *       else
		 *         a.display login screen
		 *     if false:
		 *       a.display login screen
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
		$('body').append(LoginView.template());
		//$('body').append(HomeView.template(homeObj.menu));
	};

	return {
		initialize: init
	}
});