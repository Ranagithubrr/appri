
$(document).ready(function () {


  // for nav-bar icon
  $('#bar').click(function () {
    $('#bar').addClass('hide'),
      $('#bar2').removeClass('hide')
  });

  $('#bar2').click(function () {
    $(this).addClass('hide'),
      $('#bar').removeClass('hide')

  });
  // Testimonial slick slider 
  $('.test-slide').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    dots: false,
    arrows: false
  });

  // client slider area

  $('#imgslider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    dots: false,
    arrows: false
  });
  $('#imgsliderTab').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    dots: false,
    arrows: false
  });
  $('#imgsliderMob').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    dots: false,
    arrows: false
  });

  // counters

  $('#count40').counterUp({
    delay: 100,
    time: 5000

  });
  $('#count1090').counterUp({
    delay: 100,
    time: 3000

  });
  $('#count790').counterUp({
    delay: 100,
    time: 2000

  });

  // for fixed nav-bar
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 300) {
      $("#nav-bar").addClass("fixed-nav");
    } else {
      $("#nav-bar").removeClass("fixed-nav");
    }

  });
  $('#mybar').click(function () {
    $('#navUl').toggleClass('show');
  })

  // popup video

  $('#popUpVideo').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });

  // one page nav
  $('#navUl').onePageNav();

  // for scroll top button
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 850) {
      $("#sctop").addClass("show");
    } else {
      $("#sctop").removeClass("show");
    }
  });

  $("#sctop").click(function () {
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#header-section").offset().top
    }, 1000);
  });

});

