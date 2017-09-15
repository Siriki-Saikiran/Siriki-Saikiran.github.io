$(document).ready(function() {
	console.log('ready');
	var $window = $(window);


	//typed.js intro
	var firstLineText = {
		strings: ["", "Hi, I'm Saikiran"],
		typeSpeed: 35
	}

	var secondLineText = {
		strings: ["", "I script to solve everyday problems"],
		typeSpeed: 35
	}

	var typeIntro = new Typed('#first-line', firstLineText);
	setTimeout(function(){
		var typeIntro = new Typed('#second-line', secondLineText);
		setTimeout(function(){
			$('#learn-more').css('opacity', 1);
		}, 4200);
	}, 1800);

	// scrollspy
	$("#learn-more").on('click', function(e) {
   e.preventDefault();
   var hash = this.hash;
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 600);
	});

	// animate project containers
	var $projectContainer = $('.project-container');
	$window.scroll(function(){
		$projectContainer.each(function(){
			//check if scrollheight is past threshold, and div has not been transitioned
			if($(document.body).scrollTop() + $(window).height()*1.2 > ($(this).position().top + $(this).height()) && !$(this).hasClass('transitioned')){ 
				$(this).transition('scale');
				$(this).addClass('transitioned');
			}
		});
	});


	// form handling
  $('form').submit(function(e){
		e.preventDefault();
		var formData = $('form').serializeArray();
		$.ajax({
			url: 'sirikisaikiran@gmail.com',
			method: 'POST',
			data: formData,
			dataType: 'json',
			success: function(data){
				$('.remove').css('opacity', 0);	
				$('#xout').css('opacity', 0);
				$('#contact').attr("disabled", true);
				$('#contact').text("SUBMITTED");
				$('#form-messages').text("Thanks for the info, I'll be in touch shortly");
				$('#form-messages').css('opacity', 1);	
				setTimeout(function(){
					$('#lightboxForm').modal('toggle');
				}, 3000);
			}
		});
  });

});