// Instantiate the current user //
App.the.user = new App.m.User({
	fb_id : 100004319372532,
	name : 'Jim'
});

// You could add router specific functionality
App.r.on('route:user_profile', function(){
	App.the.user.fetch({
		url : 'https://graph.facebook.com/' + App.the.user.get('fb_id'),
		dataType : 'jsonp',
		success : function(){
			// You can also trigger your own events to update the view
			// See init.js line 21.
			App.the.user.trigger('myCustomEvent');
		}
	});

});

App.c.user = _.extend({

	login : function(){
		// Generate Facebook login dialog here maybe...
	}

});