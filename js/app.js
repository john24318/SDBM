define(['chui', 'modules/login/js/login', 'modules/home/js/home', 'models/module/moduleCollection'], function($, LoginView, HomeView, Modules) {
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
		 
		var modules = new Modules();
		modules.fetch('/data/modules.json');
		//$('body').append(LoginView.template());
		$('body').append(HomeView.template(modules));
		//$('body').append(HomeView.preload(modules));
	};

	return {
		initialize: init
	}
});