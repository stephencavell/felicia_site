//gallery-controller.js

$(function() {
	var urbanFarmers = [
	{'url':'imgs/urban_farmers/UF__01_LG.jpg'},
	{'url':'imgs/urban_farmers/UF__02_LG.jpg'},
	{'url':'imgs/urban_farmers/UF__03_LG.jpg'},
	{'url':'imgs/urban_farmers/UF__04_LG.jpg'},
	{'url':'imgs/urban_farmers/UF__05_LG.jpg'},
	{'url':'imgs/urban_farmers/UF__06_LG.jpg'},
	{'url':'imgs/urban_farmers/UF__07_LG.jpg'},
	{'url':'imgs/urban_farmers/UF__08_LG.jpg'},
	{'url':'imgs/urban_farmers/UF__09_LG.jpg'},
	{'url':'imgs/urban_farmers/UF__10_LG.jpg'},
	{'url':'imgs/urban_farmers/UF__11_LG.jpg'},
	{'url':'imgs/urban_farmers/UF__12_LG.jpg'},
	];

	function openHoleInTheSky() {
		alert("open hole in the sky!!");
	}

	function openUrbanFarmers() {
		

		$('.gallery-view').fadeIn();

	}

	$('#hole-its-nav').on('click', openHoleInTheSky);
	$('#urban-farmers-nav').on('click', openUrbanFarmers);

	$('.button-close').on('click', function() {
		$('.gallery-view').fadeOut();
	});
	
});