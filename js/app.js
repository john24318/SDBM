define(['chui', 'modules/login/js/login', 'modules/home/js/home', 'models/module/moduleCollection'], function($, LoginView, HomeView, ModuleCollection) {
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
		 
		var modules = new ModuleCollection();
		var datalist = modules.fetch('/data/modules.json');
		//var view = new LoginView();
		var view = new HomeView();
		$('body').append(view.template(datalist));
		//must re-bind body when loaded template
		$.applyBindings();

		view.preload_handler();
		
	};

	return {
		initialize: init
	}
});