;(function() {
	"use strict";
 var menuToggle = document.querySelector('.ba-menu-toggle'),
 		overlay= document.querySelector('.ba-overlay'),
        body = document.body;

    menuToggle.addEventListener('click', function(){
        body.classList.toggle('ba-menu-open');
    });
    overlay.addEventListener('click', function(){
        body.classList.toggle('ba-menu-open');
    });

	var header = document.querySelector(".ba-header"),
		stop = header.offsetTop,
		scrollTop;
	window.onscroll = function (e) {
		scrollTop = window.pageYOffset;

		if (scrollTop >= stop) {
	header.classList.add('ba-sticky');
		} else {
	header.classList.remove('ba-sticky');
		}
	};
	window.onresize = function (e) {
		stop = header.offsetTop;
	};



	// Select all links with hashes
	$('a[href*="#"]')
	// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function(event) {
			// On-page links
			if (
				location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
				&&
				location.hostname == this.hostname
			) {
				// Figure out element to scroll to
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				// Does a scroll target exist?
				if (target.length) {
					// Only prevent default if animation is actually gonna happen
					event.preventDefault();
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000, function() {
						// Callback after animation
						// Must change focus!
						var $target = $(target);
						$target.focus();
						if ($target.is(":focus")) { // Checking if the target was focused
							return false;
						} else {
							$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
							$target.focus(); // Set focus again
						};
					});
				}
			}
		});

	$(document).on('scroll', function() {
		const posDoc = $(this).scrollTop();

		$('.ba-section').each(function(index, item) {
			var topHeader = $(this).offset().top - 38;
			var botHeader = topHeader + $(this).height();

			if (
				posDoc > topHeader &&
				posDoc < botHeader
			) {
				$('.ba-main-nav a').removeClass('ba-active');
				$('.ba-main-nav a').eq(index).addClass('ba-active');
			}

		});
	});

})();

