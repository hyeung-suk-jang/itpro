$( document ).ready(function() {
				/*setTimeout(function(){
						$(".image-container").removeClass("image-scroller2");
						$(".image-container").removeClass("image-scroller3");
						$(".image-container").addClass("image-scroller1");
						$(".counter").removeClass("counter2");
						$(".counter").removeClass("counter3");
						$(".counter").addClass("counter1");
					}, 2000);
					setTimeout(function(){
						$(".image-container").removeClass("image-scroller1");
						$(".image-container").removeClass("image-scroller3");
						$(".image-container").addClass("image-scroller2");
						$(".counter").removeClass("counter1");
						$(".counter").removeClass("counter3");
						$(".counter").addClass("counter2");
					}, 4000);
					setTimeout(function(){
						$(".image-container").removeClass("image-scroller1");
						$(".image-container").removeClass("image-scroller2");
						$(".image-container").addClass("image-scroller3");
						$(".counter").removeClass("counter1");
						$(".counter").removeClass("counter2");
						$(".counter").addClass("counter3");
					}, 6000);
				setInterval(function(){
					setTimeout(function(){
						$(".image-container").removeClass("image-scroller2");
						$(".image-container").removeClass("image-scroller3");
						$(".image-container").addClass("image-scroller1");
						$(".counter").removeClass("counter2");
						$(".counter").removeClass("counter3");
						$(".counter").addClass("counter1");
					}, 2000);
					setTimeout(function(){
						$(".image-container").removeClass("image-scroller1");
						$(".image-container").removeClass("image-scroller3");
						$(".image-container").addClass("image-scroller2");
						$(".counter").removeClass("counter1");
						$(".counter").removeClass("counter3");
						$(".counter").addClass("counter2");
					}, 4000);
					setTimeout(function(){
						$(".image-container").removeClass("image-scroller1");
						$(".image-container").removeClass("image-scroller2");
						$(".image-container").addClass("image-scroller3");
						$(".counter").removeClass("counter1");
						$(".counter").removeClass("counter2");
						$(".counter").addClass("counter3");
					}, 6000);
				}, 6000);*/
				enquire.register("screen and (min-width:600px)", function() {
            		$(window).load(function() {
						$("li.feature1").hover(
						  function () {
						    $(".screenshot-slider").addClass("screenshot-slide1");
						  	$(".screenshot-slider").removeClass("screenshot-slide2");
						    $(".screenshot-slider").removeClass("screenshot-slide3");
						    $(".screenshot-slider").removeClass("screenshot-slide4");
						    $(".screenshot-slider").removeClass("screenshot-slide5");
						    $(".screenshot-slider").removeClass("screenshot-slide6");
						    $(".screenshot-slider").removeClass("screenshot-slide7");
						    $(".screenshot-slider").removeClass("screenshot-slide8");
						    $(".screenshot-slider").removeClass("screenshot-slide9");
						    $(".screenshot-slider").removeClass("screenshot-slide10");
						 }
						);
						$("li.feature2").hover(
						  function () {
						    $(".screenshot-slider").addClass("screenshot-slide2");
						    $(".screenshot-slider").removeClass("screenshot-slide1");
						    $(".screenshot-slider").removeClass("screenshot-slide3");
						    $(".screenshot-slider").removeClass("screenshot-slide4");
						    $(".screenshot-slider").removeClass("screenshot-slide5");
						    $(".screenshot-slider").removeClass("screenshot-slide6");
						    $(".screenshot-slider").removeClass("screenshot-slide7");
						    $(".screenshot-slider").removeClass("screenshot-slide8");
						    $(".screenshot-slider").removeClass("screenshot-slide9");
						    $(".screenshot-slider").removeClass("screenshot-slide10");
						  }
						);
						$("li.feature3").hover(
						  function () {
						    $(".screenshot-slider").addClass("screenshot-slide3");
						    $(".screenshot-slider").removeClass("screenshot-slide1");
						    $(".screenshot-slider").removeClass("screenshot-slide2");
						    $(".screenshot-slider").removeClass("screenshot-slide4");
						    $(".screenshot-slider").removeClass("screenshot-slide5");
						    $(".screenshot-slider").removeClass("screenshot-slide6");
						    $(".screenshot-slider").removeClass("screenshot-slide7");
						    $(".screenshot-slider").removeClass("screenshot-slide8");
						    $(".screenshot-slider").removeClass("screenshot-slide9");
						    $(".screenshot-slider").removeClass("screenshot-slide10");
						  }
						);
						$("li.feature4").hover(
						  function () {
						    $(".screenshot-slider").addClass("screenshot-slide4");
						  	$(".screenshot-slider").removeClass("screenshot-slide1");
						    $(".screenshot-slider").removeClass("screenshot-slide2");
						    $(".screenshot-slider").removeClass("screenshot-slide3");
						    $(".screenshot-slider").removeClass("screenshot-slide5");
						    $(".screenshot-slider").removeClass("screenshot-slide6");
						    $(".screenshot-slider").removeClass("screenshot-slide7");
						    $(".screenshot-slider").removeClass("screenshot-slide8");
						    $(".screenshot-slider").removeClass("screenshot-slide9");
						    $(".screenshot-slider").removeClass("screenshot-slide10");
						  }
						);
						$("li.feature5").hover(
						  function () {
						    $(".screenshot-slider").addClass("screenshot-slide5");
						  	$(".screenshot-slider").removeClass("screenshot-slide1");
						    $(".screenshot-slider").removeClass("screenshot-slide2");
						    $(".screenshot-slider").removeClass("screenshot-slide3");
						    $(".screenshot-slider").removeClass("screenshot-slide4");
						    $(".screenshot-slider").removeClass("screenshot-slide6");
						    $(".screenshot-slider").removeClass("screenshot-slide7");
						    $(".screenshot-slider").removeClass("screenshot-slide8");
						    $(".screenshot-slider").removeClass("screenshot-slide9");
						    $(".screenshot-slider").removeClass("screenshot-slide10");
						  }
						);
						$("li.feature6").hover(
						  function () {
						    $(".screenshot-slider").removeClass("screenshot-slide5");
						  	$(".screenshot-slider").removeClass("screenshot-slide1");
						    $(".screenshot-slider").removeClass("screenshot-slide2");
						    $(".screenshot-slider").removeClass("screenshot-slide3");
						    $(".screenshot-slider").removeClass("screenshot-slide4");
						    $(".screenshot-slider").addClass("screenshot-slide6");
						    $(".screenshot-slider").removeClass("screenshot-slide7");
						    $(".screenshot-slider").removeClass("screenshot-slide8");
						    $(".screenshot-slider").removeClass("screenshot-slide9");
						    $(".screenshot-slider").removeClass("screenshot-slide10");
						  }
						);
						$("li.feature7").hover(
						  function () {
						    $(".screenshot-slider").removeClass("screenshot-slide5");
						  	$(".screenshot-slider").removeClass("screenshot-slide1");
						    $(".screenshot-slider").removeClass("screenshot-slide2");
						    $(".screenshot-slider").removeClass("screenshot-slide3");
						    $(".screenshot-slider").removeClass("screenshot-slide4");
						    $(".screenshot-slider").removeClass("screenshot-slide6");
						    $(".screenshot-slider").addClass("screenshot-slide7");
						    $(".screenshot-slider").removeClass("screenshot-slide8");
						    $(".screenshot-slider").removeClass("screenshot-slide9");
						    $(".screenshot-slider").removeClass("screenshot-slide10");
						  }
						);
						$("li.feature8").hover(
						  function () {
						    $(".screenshot-slider").removeClass("screenshot-slide5");
						  	$(".screenshot-slider").removeClass("screenshot-slide1");
						    $(".screenshot-slider").removeClass("screenshot-slide2");
						    $(".screenshot-slider").removeClass("screenshot-slide3");
						    $(".screenshot-slider").removeClass("screenshot-slide4");
						    $(".screenshot-slider").removeClass("screenshot-slide6");
						    $(".screenshot-slider").removeClass("screenshot-slide7");
						    $(".screenshot-slider").addClass("screenshot-slide8");
						    $(".screenshot-slider").removeClass("screenshot-slide9");
						    $(".screenshot-slider").removeClass("screenshot-slide10");
						  }
						);
						$("li.feature9").hover(
						  function () {
						    $(".screenshot-slider").removeClass("screenshot-slide5");
						  	$(".screenshot-slider").removeClass("screenshot-slide1");
						    $(".screenshot-slider").removeClass("screenshot-slide2");
						    $(".screenshot-slider").removeClass("screenshot-slide3");
						    $(".screenshot-slider").removeClass("screenshot-slide4");
						    $(".screenshot-slider").removeClass("screenshot-slide6");
						    $(".screenshot-slider").removeClass("screenshot-slide7");
						    $(".screenshot-slider").removeClass("screenshot-slide8");
						    $(".screenshot-slider").addClass("screenshot-slide9");
						    $(".screenshot-slider").removeClass("screenshot-slide10");
						  }
						);
						$("li.feature10").hover(
						  function () {
						    $(".screenshot-slider").removeClass("screenshot-slide5");
						  	$(".screenshot-slider").removeClass("screenshot-slide1");
						    $(".screenshot-slider").removeClass("screenshot-slide2");
						    $(".screenshot-slider").removeClass("screenshot-slide3");
						    $(".screenshot-slider").removeClass("screenshot-slide4");
						    $(".screenshot-slider").removeClass("screenshot-slide6");
						    $(".screenshot-slider").removeClass("screenshot-slide7");
						    $(".screenshot-slider").removeClass("screenshot-slide8");
						    $(".screenshot-slider").removeClass("screenshot-slide9");
						    $(".screenshot-slider").addClass("screenshot-slide10");
						  }
						);
					});
				});
				
            	
				var controller = new ScrollMagic.Controller();
				var heroBannerNavTween2 = new TweenMax.to('body.success-stories-inner', 0.5, {
			        backgroundColor: '#fff'
			    });
			    var heroBannerNavScene2 = new ScrollMagic.Scene({
			        triggerElement: '.the-result',
			        offset: -100,
			        duration:'30%'
			    })
			    .setTween(heroBannerNavTween2)
			    //.addIndicators()
			    .addTo(controller)

			    
				var resultSectionTween1 = new TweenMax.from('.the-result', 0.5, {
			        opacity: 0
			    });
			    var resultSectionScene1 = new ScrollMagic.Scene({
			        triggerElement: '.the-result',
			        offset: -100,
			        duration:'30%'
			    })
			    .setTween(resultSectionTween1)
			    //.addIndicators()
			    .addTo(controller)


			    var heroBannerNavScene3 = new ScrollMagic.Scene({
			        triggerElement: '.app-image',
			        offset: -100,
			    })
			    .setClassToggle(".app-image", "add-image")
                //.addIndicators()
                .addTo(controller);

                var heroBannerNavScene4 = new ScrollMagic.Scene({
			        triggerElement: '.goal-section',
			        offset: -50,
			    })
			    .setClassToggle(".goal-image", "our-goal-image")
                //.addIndicators()
                .addTo(controller);


        $('.top-link a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html, body').animate({
                  scrollTop: target.offset().top - 65
                }, 1000);
                return false;
              }
            }
          });
        
	// add request proposal 22 november 2016
		$('.footer-text .banner-footer').click(function() {
			$('body').addClass("no-scroll");
			$('.contact-popup').addClass( "show" );
			setTimeout(function(){ 
				$('.contact-popup .inner-holder').addClass( "show" );
			}, 500);
		});

		$('.contact-popup .close-button').click(function() {
			$('.contact-popup .inner-holder').removeClass( "show" );
			setTimeout(function(){ 
				$('body').removeClass("no-scroll");
				$('.contact-popup').removeClass( "show" );
			}, 500);
		  
		});
		$('.get-a-quote-link').click(function() {
			$('body').addClass("no-scroll");
			$('.contact-popup').addClass( "show" );
			setTimeout(function(){ 
				$('.contact-popup .inner-holder').addClass( "show" );
			}, 500);
		});
		$('.contact-popup').click(function() {
			$('.contact-popup .inner-holder').removeClass( "show" );
			setTimeout(function(){ 
				$('body').removeClass("no-scroll");
				$('.contact-popup').removeClass( "show" );
			}, 500);
		});
		$(".contact-popup > .inner-holder").click(function(e) {
	        e.stopPropagation();
	    })
		/*var waypoints = $('.docsnap-content').waypoint(function(direction) {
			$()
		})*/
		$('.docsnap-content').waypoint(function() {        
		   $(this.element).addClass('slideup');
		},{offset: '50%'});
		$('.goal-content').waypoint(function() {        
		   $(this.element).addClass('slideup');
		},{offset: '50%'});
		$('.wireframe').waypoint(function() {        
		   $(this.element).addClass('slideup');
		},{offset: '55%'});
		$('.app-design').waypoint(function() {        
		   $(this.element).addClass('slideup');
		},{offset: '55%'});
		$('.the-result').waypoint(function() {        
		   $(this.element).addClass('slideup');
		},{offset: '50%'});
		
		$('#carousel').flexslider({
        animation: "slide",
        direction: "vertical",
        controlNav: false,
        animationLoop: true,
        slideshowSpeed: 2000,  
        itemwidth: 200,
        itemMargin: 0,
        maxItems: 1, 
        directionNav: false,
        slideshow: true,
        //asNavFor: '#slider'
      });

      $('#slider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: true,
        slideshowSpeed: 2000,  
        direction: "vertical",
        directionNav: false,
        slideshow: true,
        //sync: "#carousel",
        start: function(slider){
          $('body').removeClass('loading');
        }
      });
      $('.flexslider').flexslider({
        animation: "slide",
        direction: "vertical",
        controlsContainer: $(".custom-controls-container"),
        customDirectionNav: $(".custom-navigation a"),
        start: function(slider){
          $('body').removeClass('loading');
        }
      });
      var controller = new ScrollMagic.Controller();
        var tween1 = new TweenMax.to('.parallax-background-image', 0.5, {
           marginLeft : -900,
        });
        var scene1 = new ScrollMagic.Scene({
                triggerElement: ".solution-counter",
                offset:-300,
                duration: '200%'
        })
        .setTween(tween1) // the tween durtion can be omitted and defaults to 1
        .addIndicators({name: "2 (duration: 300)"}) // add indicators (requires plugin)
        .addTo(controller);
});
