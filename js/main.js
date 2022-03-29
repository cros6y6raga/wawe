$(function () {
  $(".menu").on("click", "a", function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });
  $('.slider-blog__wrapper').slick({
    dots: true,
    arrows: false,
  });
  $('.header__btn').on('click', function () {
    $('.menu').toggleClass('menu__active');
  });
  var mixer = mixitup('.gallery__content');
});