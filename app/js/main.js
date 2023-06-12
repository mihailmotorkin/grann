$(function(){
  $('.bestsellers-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });

  $('.questions__item-btn').on('click', function(){
    // $(this).removeClass('active');
    // $(this).toggleClass('active');

    // $('.questions__item-btn').toggleClass('questions__item-btn--active');
    
    
    $('.questions__item-btn').removeClass('questions__item-btn--active'); 
    $(this).addClass('questions__item-btn--active');
    
  });


})
