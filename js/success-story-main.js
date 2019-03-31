$( document ).ready(function() {
	var controller = new ScrollMagic.Controller();
		var heroBannerNavTween = new TweenMax.to('body.success-stories-inner', 0.5, {
		backgroundColor: '#000'
	});
	var heroBannerNavScene = new ScrollMagic.Scene({
		triggerElement: '.our-goal',
		offset: -50,
		duration:'30%'
	})
	.setTween(heroBannerNavTween)
	//.addIndicators()
	.addTo(controller)
});