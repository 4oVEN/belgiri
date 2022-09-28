const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
});

close.addEventListener('click', () => {
  menu.classList.remove('active');
});

$(document).ready(function(){
  $('.carousel__inner').slick({
    speed: 1200,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    // fade: true,
    // cssEase: 'linear'
  });
 
  // Modal
  $('[data-modal=registration]').on('click', function(){
    $('.overlay, #application').fadeIn('slow');
  });
  $('.modal__close').on('click', function(){
    $('.overlay, #application, #thanks').fadeOut('slow');
  });

  $('form').submit(function(e){
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: 'mailer/smart.php',
      data: $(this).serialize()
    }).done(function(){
      $(this).find('input').val('');
      $('#application').fadeOut();
      $('.overlay, #thanks').fadeIn('slow');

      $('form').trigger('reset');
    });
    return false;
  });
});