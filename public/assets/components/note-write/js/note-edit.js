$(document).ready(function () {
	
	$('#menu-1').on('click', function () {
		close('font-menu');
		if($('#font-menu').data('action')=="close"){
			document.getElementById('font-menu').style.right="60px";
			$('#font-menu').data('action',"open");
		}else{
			document.getElementById('font-menu').style.right="-100px";
			$('#font-menu').data('action',"close");
		}
	});
	$('#menu-2').on('click', function () {
		close('color-menu');
		if($('#color-menu').data('action')=="close"){
			document.getElementById('color-menu').style.right="60px";
			$('#color-menu').data('action',"open");
		}else{
			document.getElementById('color-menu').style.right="-100px";
			$('#color-menu').data('action',"close");
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