App.m.User = Backbone.Model.extend({

	initialize : function(){
		this.set({
			permalink : 'users/' + this.get('fb_id'),
			profile_pic : 'https://graph.facebook.com/' + this.get('fb_id') + '/picture'
		});
	}

});