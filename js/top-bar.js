$(document).ready(function(){
	$('.top-menu-toggle').click(function(){
		$(this).toggleClass('open');
		$('.hidden-right-menu').toggleClass('open')
	});
});
