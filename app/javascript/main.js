function showSongs(song) {
	var source   =	$('#songs-template').html();
	var template = Handlebars.compile(source);
	
	$.ajax({
		url: 'https://api.spotify.com/v1/search',
		data: {
			q: song,
			type: 'track'
		}
	})
	.done(function(response) {
		console.log("success");
		$('#songs_container').html(template(response));
		$('#inputSong').blur().focus();
		setTimeout(function () {
			$('.song').removeClass('hidden')
			$('.song_image').addClass('zoomIn');
			$('.song_item-title').addClass('zoomIn');
			$('.song_item-text').addClass('zoomIn');
			$('.song_audio').addClass('zoomIn');
		}, 1000);
	})

}
jQuery(document).ready(function($) {
	$('.form-search').on('submit', function(e) {
		e.preventDefault();
		showSongs($("#inputSong").val());
	});
});
