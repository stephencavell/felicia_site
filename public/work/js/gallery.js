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
});