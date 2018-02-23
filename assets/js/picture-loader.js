

//CHECKS IF PAGE IMAGES ARE IN VIEW AND IF SO LOADS THEM

if(window.addEventListener && window.requestAnimationFrame &&
	document.getElementsByClassName) window.addEventListener('load', function() {

		window.addEventListener('scroll', checkView);
		window.addEventListener('resize', checkView);

		let imgs = document.getElementsByClassName('unloaded');

		function elementInView(e) {
			
			let rect = e.getBoundingClientRect();

			return(
				((rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.top >= 0) ||
				(rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.bottom >= 0)) &&
				((rect.left <= (window.innerWidth || document.documentElement.clientWidth) && rect.left >= 0) ||
				(rect.right <= (window.innerWidth || document.documentElement.clientWidth) && rect.right >= 0))
				);
		}

		function setImage(img) {
			let src = img.dataset.src;
			img.setAttribute('src', src);
			img.setAttribute('class', 'loaded');
		}

		function checkView() {
			if(imgs.length <= 0) {
				window.removeEventListener('scroll', checkView);
				window.removeEventListener('resize', checkView);
			}
			else {
				for(let i=imgs.length-1; i>=0; i--){
					if(elementInView(imgs[i])){
						setImage(imgs[i]);
					}
				}
			}
		}

		checkView();
	});