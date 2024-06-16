import 'jquery'
import svg4everybody from 'svg4everybody';
import objectFitImages from 'object-fit-images';
import LazyLoad from 'lazyload';
import Inputmask from "inputmask";

// import '~components/input'
import '~components/tabs/tabs.js'
import '~components/slider/slider.js'
import '~components/popup/popup.js'
import '../scss/style.scss'
import { each } from 'jquery';

$(document).ready(function() {
    // adds SVG External Content support to all browsers
    svg4everybody();

    // Polyfill object-fit/object-position on <img>
    objectFitImages();

    // lazyload
    let images = document.querySelectorAll("img.lazyload");
    new LazyLoad(images);
});
document.addEventListener('DOMContentLoaded', () => {
	var swiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
      });
      var swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
      });
});
$(document).ready(function() {
	$('.create-request').magnificPopup({
	  type: 'inline',
	  midClick: true
	});
	$(document).on('click', '.popup-close', function (e) {
	  e.preventDefault();
	  $.magnificPopup.close();
	});
	$('#request-form').on('submit', function(e) {
		e.preventDefault();
		$.magnificPopup.close();
		$.magnificPopup.open({
		  items: {
			src: '#success-popup'
		  },
		  type: 'inline'
		});
	  });
});
document.addEventListener('DOMContentLoaded', function() {
    var phoneInput = document.getElementById('phone');
    var phoneMask = new Inputmask('+7 (999) 999-99-99');
    phoneMask.mask(phoneInput);
});
document.addEventListener('DOMContentLoaded', function() {
    var phoneInput = document.getElementById('phone2');
    var phoneMask = new Inputmask('+7 (999) 999-99-99');
    phoneMask.mask(phoneInput);
});
