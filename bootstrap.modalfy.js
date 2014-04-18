function modalfyIframes(){
	var offset=0; // 60 if you dont use buttons like me
	$('.modal-dialog iframe').each(function(){
		$(this).css('height',($(this).parents().find('.modal-body').height() + offset) + 'px' );
	});
}

$(window).on('resize load',modalfyIframes);


$( '.modalfy').click(function() {
	bootbox.dialog({
		message:'<iframe border="0" height="100%" width="100%" src="'+$(this).attr("href")+'" onload="modalfyIframes()">',
		onEscape: function() {},
		animate: true
	});
	return false;
});
