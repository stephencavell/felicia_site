//gallery.js

$(document).ready(function () {

	$("img").on("click", function() {
		openGallery(this);
	});

	$(document).on("click", ".button-close", function() {
		// closeGallery();
		$('.gallery').hide();
		console.log("button was clicked!!!!");
	});

	function openGallery(e) {
		// $(".gallery").css('display', 'flex');
		$('.gallery').show();
		$(".gallery-photo").attr('src', e.src);
		console.log('open gallery!!!!');
	}

	function closeGallery() {
		$(".gallery").css('display', 'none');
		console.log('close gallery');
	}

	function next() {

	}

	function previous() {

	}
});
