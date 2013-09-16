// Only one router is ever needed, just return it anonymously and store in the app namespace
App.r = (function() {

	var Router = Backbone.Router.extend({

		initialize: function() {
			this.currentRoute = ko.observable('home');
			this.__ = this.currentRoute;
			this.on('route', function(route) {
				this.currentRoute(route);
			});
		},

		// Setup the routes
		routes: {
			"home": "home",
			"users/:id": "user_profile",

			// Defaults to home
			"*actions" : "home"
		},
		
		goBack: function() {
			window.history.back();
		},

		// Routes using the href of an anchor or other element
		routeAnchor: function( viewModel, e ) {
			var href = $( e.target ).attr('href');
			router.navigate( href, {
				trigger : true
			});
		}

	});

	var router = new Router();

	return router;

})();