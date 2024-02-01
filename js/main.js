$(document).ready(function () {

  // Scroll spee
  // $('.address').on('click','a', function (event) {
  //   event.preventDefault();
  //   var id  = $(this).attr('href'),
  //     top = $(id).offset().top;
  //     $('body,html').animate({scrollTop: top}, 800);
  // });

  // Show menu mobail
  // $('.navbar-toggle').click(function () {
  //   $(this).toggleClass('active');
  //   $('.nav').toggleClass('open');
  // });

  // Header add class
  // $(window).scroll(function() { 
  //   var top = $(document).scrollTop();
  //   if (top > 0) {
  //     $('.header').addClass('scroll-page');
  //   }
  //   else {
  //     $('.header').removeClass('scroll-page');
  //   }
  // });

  // Hidden nav
  // $(document).click(function(event) {
  //   if ($(event.target).closest('.navbar-toggle').length 
  //     || $(event.target).closest('.nav').length ) return;
  //     $('.nav').removeClass('open');
  //     $('.navbar-toggle').removeClass('active');
  //     event.stopPropagation();
  // });

  // Maskedinput
  // $(function($){
  //   $('.phone-mask').mask(('+7 ') + '(999) 999-99-99');
  // });

  // Accardion
  // var accordion = function() {
  //   var data = $('.accordion').attr('data-accordion')
  //   $('.accordion-header').on('click', function(){
  //     $(this).next('.accordion-body').not(':animated').slideToggle()
  //   })
  //   $('.accordion-header').click(function () {
  //     $(this).parent('.accordion li').toggleClass('active');
  //   });
  // }
  // accordion();

  const timeSwiper = 4800;

  // Balance sl
  var swiper = new Swiper(".balance__sl", {
    autoplay: {
      delay: timeSwiper,
    },
    spaceBetween: 10,
    slidesPerView: 'auto',
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // 992: {
      //   slidesPerView: 2,
      //   spaceBetween: 20,
      // },
    },
  });

  // Profession sl
  var swiper = new Swiper(".profession__sl", {
    autoplay: {
      delay: timeSwiper,
    },
    spaceBetween: 0,
    slidesPerView: 1,
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // 992: {
      //   slidesPerView: 2,
      //   spaceBetween: 20,
      // },
    },
  });

  // Reviews sl
  var swiper = new Swiper(".reviews__sl", {
    autoplay: {
      delay: timeSwiper,
    },
    spaceBetween: 8,
    slidesPerView: 'auto',
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    breakpoints: {
      // 992: {
      //   slidesPerView: 2,
      //   spaceBetween: 20,
      // },
    },
  });

});

// Map
// ymaps.ready(init);
// var myMap, 
//     myPlacemark;

// function init(){ 
//   myMap = new ymaps.Map("map", {
//     center: [55.77511086, 37.61463844],
//     zoom: 16,
//     controls: ['zoomControl']
//   });
  
//   myPlacemark = new ymaps.Placemark([55.77511086, 37.61463844], {});
  
//   myMap.geoObjects.add(myPlacemark);
//   myMap.behaviors.disable([
//     'drag',
//     'scrollZoom'
//   ]);

// }