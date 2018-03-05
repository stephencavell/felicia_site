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
	const mcswnys = [
		{'src': 'imgs/mcSwnys_0_LG'},
		{'src': 'imgs/McSwnys_01TomDempsey_LG'},
		{'src': 'imgs/McSwnys_02MaryLou_LG'},
		{'src': 'imgs/McSwnys_03_LG'},
		{'src': 'imgs/McSwnys_04_LG'},
		{'src': 'imgs/McSwnys_05_LG'}
	];

	const meu = [
		{'src': 'imgs/MEU_1_LG'},
		{'src': 'imgs/MEU_2_LG'},
		{'src': 'imgs/MEU_3_LG'}
	];

	const sheowl = [
		{'src': 'imgs/SheOwl_back_LG'},
		{'src': 'imgs/SheOwl_cover_LG'},
		{'src': 'imgs/SheOwl_inset_LG'}
	];

	const tb = [
		{'src': 'imgs/TB1_LG'},
		{'src': 'imgs/TB2_LG'},
		{'src': 'imgs/TBgal1_LG'},
		{'src': 'imgs/TBgal2_LG'},
		{'src': 'imgs/TBgal3_LG'}
	];

	const urb = [
		{'src': 'imgs/URB_back_LG'},
		{'src': 'imgs/URB_cover_LG.jpg'},
		{'src': 'imgs/URB_disc_LG'}
	];

//CREATE HTML AND CREATE GALLERIES
	createGallery('mcswnys-gallery');
	createGallery('meu-gallery');
	createGallery('sheowl-gallery');
	createGallery('tb-gallery');
	createGallery('urb-gallery');
	let mcswnysGallery = new Gallery('mcswnys-gallery', mcswnys, $('#mcswnys-gallery'));
	let meuGallery = new Gallery('meu-gallery', meu, $('#meu-gallery'));
	let sheowlGallery = new Gallery('sheowl-gallery', sheowl, $('#sheowl-gallery'));
	let tbGallery = new Gallery('tb-gallery', tb, $('#tb-gallery'));
	let urbGallery = new Gallery('urb-gallery', urb, $('#urb-gallery'));

	function createGallery(name) {
		let galleryTemplate = '\
			<div class="gallery-view" id="'+name+'">\
				<div class="button button-left"><</div>\
	            <div class="button button-right">></div>\
	            <div class="button button-close">X</div>\
            </div>';

        $('.page').append(galleryTemplate);
	}

//OPEN THE GALLERY
	function open() {
		
		let gallery = this.dataset.gallery;
		switch(gallery) {
			case 'mcswnys-gallery':
				mcswnysGallery.openGallery();
				break;
			case 'meu-gallery':
				meuGallery.openGallery();
				break;
			case 'sheowl-gallery':
				sheowlGallery.openGallery();
				break;
			case 'tb-gallery':
				tbGallery.openGallery();
				break;
			case 'urb-gallery':
				urbGallery.openGallery();
		}

	}

//LISTENER TO TRIGGER OPEN
	$('.photo-nav-box').on('click', open);

});





