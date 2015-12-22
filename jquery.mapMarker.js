/**
* jQuery.mapMarker
* Create maps with a marker
* @version 1.0
* @author webchimp <github.com/webchimp>
* @requires jQuery 1.8+
* @license MIT
*/

(function($) {
	// What does the pluginName plugin do?
	$.fn.mapMarker = function(options) {

		if (!this.length) { return this; }

		var opts = $.extend(true, {}, $.fn.mapMarker.defaults, options);

		this.each(function() {

			var el = $(this),
			lat = el.data('lat') || null,
			lng = el.data('lng') || null,
			zoom = el.data('zoom') || null,
			marker_title = el.data('marker-title') || null,
			infowindow_content = el.html() || null;

			var myLatlng = new google.maps.LatLng(lat,lng);
			var mapOptions = {
				zoom: zoom,
				center: myLatlng
			}

			var map = new google.maps.Map(this, mapOptions);

			var marker = new google.maps.Marker({
				position: myLatlng,
				map: map,
				title: marker_title
			});

			if(infowindow_content){
				var infowindow = new google.maps.InfoWindow({
					content: infowindow_content
				});

				google.maps.event.addListener(marker, 'click', function() {
					infowindow.open(map,marker);
				});
			}
		});

		return this;
	};

	// default options
	$.fn.mapMarker.defaults = {
		defaultOne: true,
		defaultTwo: false,
		defaultThree: 'yay!'
	};

})(jQuery);
