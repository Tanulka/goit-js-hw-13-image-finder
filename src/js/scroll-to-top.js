$(function () {
  // при нажатии на кнопку scrollup
  $('.scroll-to-top').click(function () {
    // переместиться в верхнюю часть страницы
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      1000,
    );
  });
});
// при прокрутке окна (window)
$(window).scroll(function () {
  // если пользователь прокрутил страницу более чем на 200px
  if ($(this).scrollTop() > 200) {
    // то сделать кнопку scrollup видимой
    $('.scroll-to-top').fadeIn();
  }
  // иначе скрыть кнопку scrollup
  else {
    $('.scroll-to-top').fadeOut();
  }
});

$('.scroll-to-top').click(function () {
  $('.scroll-to-top__icon').toggleClass('scroll-to-top__icon--rotate-arrow');
  return false;
});
