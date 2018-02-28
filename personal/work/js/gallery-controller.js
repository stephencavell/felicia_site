//gallery-controller.js

$(function() {
	
	function openGallery() {

//INITIALIZE GALLERY VARIABLES
		var start;
		var end;
		var index;
		var photos = $('.photo-box');

		if($(this).data('name') == 'Urban') {
			start = 0;
			index = start;
			end = 11;
		}
		else if($(this).data('name') == 'Hole') {
			start = 12;
			index = start;
			end = 29;
		}

//FUNCTIONS OF THE GALLERY
		function closeGallery() {
			index = 0;
			$('.gallery-view').fadeOut();
		}

		function moveLeft() {
			if(index > start) index--;
			else index = end;
			updateView();
		}

		function moveRight() {
			if(index < end) index++;
			else index = start;
			updateView();
		}

		function updateView() {
			$.each(photos, function(key) {
				if(key == index) {
					$(this).show();
				} else {
					$(this).hide();
				}
			});
		}

//UPDATE VIEW, INITIALIZE BUTTON LISTNERS, SHOW GALLERY
		updateView();

		$('.button-left').on('click', moveLeft);
		$('.button-right').on('click', moveRight);
		$('.button-close').on('click', closeGallery);
		$('.gallery-view').fadeIn();

	}

	$('.photo-nav-box').on('click', openGallery);

});