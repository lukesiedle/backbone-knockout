
// Apply knockout as a view to each backbone model instance
( function(){

	for(var x in App.the ){
		applyObservableView( App.the[x] );
	}

	function applyObservableView( backboneInstance ){

		var view = backboneInstance.view = ko.observable( backboneInstance.toJSON() );

		backboneInstance.on('change', function(){
			view( this.toJSON() );
		});

		backboneInstance.on('sync', function(){
			view( this.toJSON() );
		});

		backboneInstance.on('myCustomEvent', function(){
			view( this.toJSON() );
		});

	}

})();

// Apply knockout bindings to the html
ko.applyBindings( App );

// Apply some jquery plugin bindings if needed here..
$('#container').removeClass('initial-hide');

// Setup push state
Backbone.history.start({
	pushState:true
});