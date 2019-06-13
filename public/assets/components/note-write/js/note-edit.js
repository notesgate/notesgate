$(document).ready(function () {
	// href=""
	$('#buttonEdit').on('click',function(e){
		window.location.replace(e.target.getAttribute('data-href'));
	});

	$('#menu-1').on('click', function () {
		close('font-style');
		if($('#font-style').data('action')=="close"){
			document.getElementById('font-style').style.right="60px";
			$('#font-style').data('action',"open");
		}else{
			document.getElementById('font-style').style.right="-100px";
			$('#font-style').data('action',"close");
		}
	});
	$('#menu-2').on('click', function () {
		close('paragraf-style');
		if($('#paragraf-style').data('action')=="close"){
			document.getElementById('paragraf-style').style.right="60px";
			$('#paragraf-style').data('action',"open");
		}else{
			document.getElementById('paragraf-style').style.right="-100px";
			$('#paragraf-style').data('action',"close");
		}
	});
	$('#menu-3').on('click', function () {
		close('color-style');
		if($('#color-style').data('action')=="close"){
			document.getElementById('color-style').style.right="60px";
			$('#color-style').data('action',"open");
		}else{
			document.getElementById('color-style').style.right="-100px";
			$('#color-style').data('action',"close");
		}
	});

	/**
	 * var elseMenu close selain self
	 */
	function close(elseMenu) {
		let menuOpen=document.getElementsByClassName("side-menu");
		for (const key in menuOpen) {
			if (menuOpen.hasOwnProperty(key)) {
				console.log('menuOpen[key].id :', menuOpen[key].id);
				if(menuOpen[key].id==elseMenu){
					continue;
				}
				menuOpen[key].style.right="-100px";
				$(menuOpen[key]).data('action',"close");
			}
		}
		
	}

});