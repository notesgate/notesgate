$(document).ready(function () {
	var count=0;
	$('.menu-editor').on('click', function (e) {
		if($($(e.target).closest('DIV')).data('flag')=="open"){
			$($(e.target).closest('DIV')).removeClass('open');
			$($(e.target).closest('DIV')).data('flag',"close");
		}else{
			$($(e.target).closest('DIV')).addClass('open');
			$($(e.target).closest('DIV')).data('flag',"open")
		}
		
	});
});