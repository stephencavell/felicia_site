//gallery-controller.js
$(function() {

//GALLERY OBJECT CONTROLS VIEW
	function Gallery(name, imgs, view) {
		
		this.name = name;
		this.imgs = imgs;
		this.index = 0;
		this.view = view;

		let _this = this;

		this.view.on('click', '.button-right', _this, function() {
			_this.nextImg();
		});

		this.view.on('click', '.button-left', _this, function() {
			_this.prevImg();
		});

		this.view.on('click', '.button-close', _this, function() {
			_this.closeGallery();
		});

	}

	Gallery.prototype = {

		nextImg : function() {
			$('#'+this.name+this.index).hide();
			(this.index < this.imgs.length-1) ? this.index++ : this.index = 0;
			this.updateView();
		},

		prevImg : function() {
			$('#'+this.name+this.index).hide();
			(this.index > 0) ? this.index-- : this.index = this.imgs.length-1;
			this.updateView();
		},

		openGallery : function() {

			this.updateView();
			this.view.show();

		},

		closeGallery : function() {
			
			this.view.hide();
			$('#'+this.name+this.index).hide();

		},

		updateView : function() {

			if(!this.imgs[this.index].loaded) {
				this.addPhotoToGallery(this.imgs[this.index].src);
				this.imgs[this.index].loaded = true;
			}
			$('#'+this.name+this.index).show();

		},

		addPhotoToGallery : function(src) {
			let photoTemplate = '\
				<div class="photo-box" id="'+this.name+this.index+'">\
                    <img class="photo-box-image" alt="Gallery Photo" src="'+src+'"/>\
                    <div class="photo-box-text"></div>\
                </div>';
            this.view.append(photoTemplate);
		}
	};

//GALLERY ARRAYS
	const urban = [
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

	const hole = [
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

//CREATE HTML AND CREATE GALLERIES
	createGallery('urban-gallery');
	createGallery('hole-gallery');
	let UrbanGallery = new Gallery('urban-gallery', urban, $('#urban-gallery'));
	let HoleGallery = new Gallery('hole-gallery', hole, $('#hole-gallery'));

	function createGallery(name) {
		let galleryTemplate = '\
			<div class="gallery-view" id="'+name+'">\
				<div class="button button-left"></div>\
	            <div class="button button-right"></div>\
	            <div class="button button-close"></div>\
            </div>';

        $('.page').append(galleryTemplate);
	}

//OPEN THE GALLERY
	function open() {
		
		let gallery = this.dataset.gallery;
		switch(gallery) {
			case 'urban-gallery':
				UrbanGallery.openGallery();
				break;
			case 'hole-gallery':
				HoleGallery.openGallery();
		}

	}

//LISTENER TO TRIGGER OPEN
	$('.photo-nav-box').on('click', open);

});





