const hamburger = document.querySelector('.hamburger'),
  menu = document.querySelector('.menu');

function toggleMenu() {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
}
hamburger.addEventListener('click', toggleMenu);
menu.addEventListener('click', toggleMenu);





$(document).ready(function () {
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
  $('[data-modal=registration]').on('click', function () {
    $('.overlay, #application').fadeIn('slow');
  });
  $('.modal__close').on('click', function () {
    $('.overlay, #application, #thanks').fadeOut('slow');
  });

  $('.feed-form').submit(function (e) {
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: 'mailer/smart.php',
      data: $(this).serialize()
    }).done(function () {
      $(this).find('input').val('');
      $('#application').fadeOut();
      $('.overlay, #thanks').fadeIn('slow');

      $('form').trigger('reset');
    });
    return false;
  });

  $('.contacts__form').submit(function (e) {
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: 'mailer/smart.php',
      data: $(this).serialize()
    }).done(function () {
      $(this).find('input', 'textarea').val('');

      $('form').trigger('reset');
    })
    return false;
  });
  // Smooth scroll and pageup

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1600) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });

  const runText = document.querySelector('#text');

  const line = 'Напишите сообщение здесь.....';
  const speed = 150;

  // for (let i = 0; i <= line.length; i++){
  //   runText.value = line.substring(0, i);
  // }

  let i = 0;
  function runLine() {
    if (i++ < line.length) {
      runText.value = line.substring(0, i);
    }
    else {
      runText.value = '';
      i = 0;
    }
    done = setTimeout(runLine, speed);
  }
  runLine();

  runText.onfocus = function () {
    clearTimeout(done);
    this.value = '';
  }

});




        
