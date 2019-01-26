$(document).ready(function () {
  $('.menu-item').hover(function () {
    $('.menu-item__link').addClass('linkActive');
    $('.slider').addClass('sliderActive');
  }, function () {
    $('.menu-item__link').removeClass('linkActive');
    $('.slider').removeClass('sliderActive');

  });

  $('.menu-item__link').hover(function () {
    $('.menu-item__sub', this).addClass('subActive');
  }, function () {
    $('.menu-item__sub', this).removeClass('subActive');
  });

  $('.nav').hide();

  $('.togNav > img').click(function () {
    $('.fixH').css({
      'borderColor': '#c2c7d0'
    });
    $(".nav").toggle();
  });

  $('.like').click(function () {
    $(this).css({
      'backgroundColor': '#F54D87'
    })
  });

  $('.payment a').hover(function () {

  });

  $('.payImg1').hover(function () {
    $(this).attr({
      'src': 'assets/img/p1.png'
    })
  }, function () {
    $(this).attr({
      'src': 'assets/img/uzcard.png'
    })
  });
  $('.payImg2').hover(function () {
    $(this).attr({
      'src': 'assets/img/p2.png'
    })
  }, function () {
    $(this).attr({
      'src': 'assets/img/visa.png'
    })
  });
  $('.payImg3').hover(function () {
    $(this).attr({
      'src': 'assets/img/p3.png'
    })
  }, function () {
    $(this).attr({
      'src': 'assets/img/click.png'
    })
  });









});