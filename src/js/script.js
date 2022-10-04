const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu');
      // close = document.querySelector('.menu__close');

      function toggleMenu() {
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
      }
      hamburger.addEventListener('click', toggleMenu);
      menu.addEventListener('click', toggleMenu);
      




$(document).ready(function(){
  $('.carousel__inner').slick({
    speed: 1200,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="../img/prev.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../img/next.svg"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          // dots: true,
          arrows: false
        }
      }
      
    ]
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


    // Smooth scroll and pageup

    $(window).scroll(function(){
      if ($(this).scrollTop() > 1600){
        $('.pageup').fadeIn();
      } else {
        $('.pageup').fadeOut();
      }
    });
});