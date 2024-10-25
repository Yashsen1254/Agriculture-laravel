(function (window, document, $) {
	"use strict";

	function ntrLoading() {
		var myLoading = $('[data-ntr-loading]');
		if (myLoading.length) {
			$(window).on('load', function() {
				setTimeout(function () {
					myLoading.removeClass('is-active');
				}, 300);
			});
		}
	}
	function ntrBacktop() {
		var myBacktop = $('[data-ntr-backtop]');
		if (myBacktop.length) {
			var myWindow = $(window);
			var myTimer;
			myWindow.on('scroll', function() {
				if (myTimer) {
					clearTimeout(myTimer);
				}
				myTimer = setTimeout(function() {
					if (myWindow.scrollTop() > 200) {
						myBacktop.addClass('is-active');
					} else {
						myBacktop.removeClass('is-active');
					}
				}, 200);
			});
			myBacktop.on('click', function(e) {
				e.preventDefault();
				$('html, body').animate({scrollTop: 0}, 800);
			});
		}
	}
	function ntrAnimation() {
		$(window).on('load', function() {
			setTimeout(function () {
				AOS.init();
			}, 300);
		});
	}
	function ntrBackground() {
		var myElements = $('[data-ntr-background]');
		if (myElements.length) {
			myElements.each(function (i, el) {
				var myElement = $(el);
				var myBackground = myElement.data('ntrBackground');
				if (!myBackground) {
					return true; // next iteration
				}
				myElement.css({'background-image': 'url("'+ myBackground +'")'});
				myElement.removeAttr('data-ntr-background');
			});
		}
	}
	function ntrScroll() {
		var myElements = $('[data-ntr-scroll]');
		if (myElements.length) {
			myElements.each(function (i, el) {
				var myElement = $(el);
				var mySelector = myElement.attr('href');
				var myTarget = $(mySelector);
				if (mySelector === '' || mySelector === '#') {
					return true; // next iteration
				}
				if (!myTarget.length) {
					return true; // next iteration
				}
				myElement.on('click', function (e) {
					e.preventDefault();
					var myOffset = (myTarget.offset().top - 60);
					$('html, body').animate({scrollTop: myOffset}, 800);
				})
			});
		}
	}
	
	$(document).ready(function() {
		ntrLoading();
		ntrBacktop();
		ntrAnimation();
		ntrBackground();
		ntrScroll();
	});
})(window, document, jQuery);