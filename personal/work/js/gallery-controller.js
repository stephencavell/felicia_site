//gallery-controller.js

$(function() {

	const urbanGallery = [
		{'src': 'imgs/urban_farmers/UF__01_LG.jpg'},
		{'src': 'imgs/urban_farmers/UF__02_LG.jpg'},
		{'src': 'imgs/urban_farmers/UF__03_LG.jpg'},
		{'src': 'imgs/urban_farmers/UF__04_LG.jpg'},
		{'src': 'imgs/urban_farmers/UF__05_LG.jpg'},
		{'src': 'imgs/urban_farmers/UF__06_LG.jpg'},
		{'src': 'imgs/urban_farmers/UF__07_LG.jpg'},
		{'src': 'imgs/urban_farmers/UF__08_LG.jpg'},
		{'src': 'imgs/urban_farmers/UF__09_LG.jpg'},
		{'src': 'imgs/urban_farmers/UF__10_LG.jpg'},
		{'src': 'imgs/urban_farmers/UF__011_LG.jpg'},
		{'src': 'imgs/urban_farmers/UF__012_LG.jpg'},
	];

	const holeGallery = [
		{'src': 'imgs/hole_in_the_sky/his_1_lg'},
		{'src': 'imgs/hole_in_the_sky/his_2_lg'},
		{'src': 'imgs/hole_in_the_sky/his_3_lg'},
		{'src': 'imgs/hole_in_the_sky/his_4_lg'},
		{'src': 'imgs/hole_in_the_sky/his_5_lg'},
		{'src': 'imgs/hole_in_the_sky/his_6_lg'},
		{'src': 'imgs/hole_in_the_sky/his_7_lg'},
		{'src': 'imgs/hole_in_the_sky/his_8_lg'},
		{'src': 'imgs/hole_in_the_sky/his_9_lg'},
		{'src': 'imgs/hole_in_the_sky/his_10_lg'},
		{'src': 'imgs/hole_in_the_sky/his_11_lg'},
		{'src': 'imgs/hole_in_the_sky/his_12_lg'},
		{'src': 'imgs/hole_in_the_sky/his_13_lg'},
		{'src': 'imgs/hole_in_the_sky/his_14_lg'},
		{'src': 'imgs/hole_in_the_sky/his_15_lg'},
		{'src': 'imgs/hole_in_the_sky/his_16_lg'},
		{'src': 'imgs/hole_in_the_sky/his_17_lg'},
		{'src': 'imgs/hole_in_the_sky/his_18_lg'},
	];
	

//SECOND VERSION OF GALLERY, INPUTS NEW HTML PIECES WHEN NEEDED
	function openGallery2() {
		//GALLERY VARIABLES
		var galleryImages;
		var galleryIndex = 0;
		
		//grab the name of the gallery to open
		var gallery = $(this).data('gallery');
		
		//ASSIGN PROPER IMAGES TO GALLERY
		switch(gallery) {
			case 'urban-gallery':
				galleryImages = urbanGallery;
				break;
			case 'hole-gallery':
				galleryImages = holeGallery;
		}

		//IF GALLERY DOESN'T EXIST, CREATE IT
		if(!$('#'+gallery).length) createGallery(gallery);

//CONTAINS CREATES HTML GALLERY WITH ID AND APPENDS TO PAGE
		function createGallery(name) {
			let galleryTemplate = '\
				<div class="gallery-view" id="'+name+'">\
					<div class="button button-left"><</div>\
		            <div class="button button-right">></div>\
		            <div class="button button-close">X</div>\
	            </div>';

            $('.page').append(galleryTemplate);
		}

		function addPhotoToGallery(index, src, gallery) {
			let photoTemplate = '\
				<div class="photo-box" id="'+gallery+index+'">\
                    <img class="photo-box-image" alt="Gallery Photo" src="'+src+'"/>\
                    <div class="photo-box-text"></div>\
                </div>';
            $('#'+gallery).append(photoTemplate);
		}

		function closeGallery() {
			$('#'+gallery).fadeOut();
		}

		function moveLeft() {
			$('#'+gallery+galleryIndex).fadeOut();
			if(galleryIndex > 0) galleryIndex--;
			else galleryIndex = galleryImages.length-1;
			updateView();
		}

		function moveRight() {
			//hide current image
			$('#'+gallery+galleryIndex).fadeOut();
			//update index
			if(galleryIndex < galleryImages.length-1) galleryIndex++;
			else galleryIndex = 0;
			//update view
			updateView();
		}

		function updateView() {
			//IF IMAGE NO PRESENT, ADD IT
			if(!$('#'+gallery+galleryIndex).length) 
				addPhotoToGallery(galleryIndex, galleryImages[galleryIndex].src, gallery);
			$('#'+gallery+galleryIndex).fadeIn();
		}

		updateView();

		$('.button-left').on('click', moveLeft);
		$('.button-right').on('click', moveRight);
		$('.button-close').on('click', closeGallery);
		$('#'+gallery).fadeIn();
	}

	$('.photo-nav-box').on('click', openGallery2);

});