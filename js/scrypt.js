$(document).ready(function(){
	$('.menu').on('click',  function(e){
		e.preventDefault();
		$('.navLink').toggleClass('active');
		});
	});
