//picture-loader.js



if(window.addEventListener && window.requestAnimationFrame &&
	document.getElementsByClassName) window.addEventListener('load', function() {

		window.addEventListener('scroll', checkView);
		window.addEventListener('resize', checkView);

		let imgs = document.getElementsByClassName('unloaded');
		let imgRef = [];

		for(let i = 0; i < imgs.length; i++) {
			imgRef.push(0);
		}

		function elementInView(e) {
			
			let rect = e.getBoundingClientRect();

			return(
				(rect.top <= (window.innerHeight || document.documentElement.clientHeight) || rect.bottom >= 0) &&
				(rect.left <= (window.innerWidth || document.documentElement.clientWidth) || rect.right >= 0)
				);
		}

		function setImage(img) {
			let src = img.dataset.src;
			img.setAttribute('src', src);
			img.setAttribute('class', 'no-blur');
		}

		function checkView() {
			console.log('imgs length: ' + imgs.length);
			if(imgs.length <= 0) {
				window.removeEventListener('scroll', checkView);
				window.removeEventListener('resize', checkView);
			}
			else {
				for(let i=0; i<imgs.length; i++){
					if(elementInView(imgs[i])){
						setImage(imgs[i]);
					}
				}
			}
			
		}

		checkView();
	});