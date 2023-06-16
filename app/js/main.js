$(function(){
  $('.bestsellers-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });


  $('.questions__item-btn').on('click', function() { 

    let $p = $(this).closest('li').find('p.questions__item-text');
    $p.toggleClass('questions__item-text--active');

  });


  $('.product-slider__big').slick({
    asNavFor: '.product-slider__small',
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    fade: true
  });
  $('.product-slider__small').slick({
    asNavFor: '.product-slider__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: false
  });


  $('.product-item__choice-angle').on('click', function() { 

    let $div = $(this).closest('.product-item__choice-inner').find('.product-item__choice');
    $div.toggleClass('product-item__choice--active');

  });

  $('.product-item__choice-angle').on('click', function () {
    $(this).toggleClass('product-item__choice-angle--active');
  });


  $('.product-tabs__top-item').on('click', function(e){
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });


  // smooth scroll:

  $('a[href*="#"]').on('click', function() {
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 1500);
  return false;
});



})


Fancybox.bind("[data-fancybox]", {
  // Your custom options
});