document.addEventListener('DOMContentLoaded', function() {
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
  window.sr = ScrollReveal();
sr.reveal('.project-container1',{ duration: 1000,delay:300,rotate: { x: 100, y: 0, z: 0 },viewfactor:1,scale: 0.8,origin:'left',reset:true});
sr.reveal('.project-container2',{ duration: 1000,delay:500,rotate: { x: 100, y: 0, z: 0 },viewfactor:1,scale: 0.8,origin:'left',reset:true});
sr.reveal('.project-container3',{ duration: 1000,delay:300,rotate: { x: 100, y: 0, z: 0 },viewfactor:1,scale: 0.8,origin:'left',reset:true});
sr.reveal('.project-container4',{ duration: 1000,delay:500,rotate: { x: 100, y: 0, z: 0 },viewfactor:1,scale: 0.8,origin:'left',reset:true});


$("#skilltree").hover(function(){
	jQuery('.skillbar').each(function() {
    jQuery(this).find('.skillbar-bar').animate({
      width: jQuery(this).attr('data-percent')
    }, 4000);
  });

	
})



},false);