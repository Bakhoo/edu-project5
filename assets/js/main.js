$(document).ready(function () {

  //languages
$('.lang a[rel = language]').click(function () {
  $('.lang a[rel = language]').removeClass('langActive');
  $(this).addClass('langActive');
})


  $('.menu-item').hover(function () {
    $('.menu-item__link').addClass('linkActive');
    $('.slider').addClass('sliderActive');
    $('.slider-catal').css({
      'backgroundColor': '#fff'
    })
  }, function () {
    $('.menu-item__link').removeClass('linkActive');
    $('.slider').removeClass('sliderActive');
    $('.slider-catal').css({
      'backgroundColor': '#EBEBEB'
    })
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
    $(this).toggleClass('bgc');
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

  $('.secNav-item').hover(function () {
    $('.secNav-sub').addClass('secNavActive');
    $('.secNav-item span').attr({
      'class': 'fa fa-chevron-up'
    })
  }, function () {
    $('.secNav-sub').removeClass('secNavActive');
    $('.secNav-item span').attr({
      'class': 'fa fa-chevron-down'
    })
  });

  $('.formNav').hide();
  $('.pr-order .fa').click(function () {
    $(this).toggleClass('pox');
    $('.formNav').toggle();
  })

  $('.slider-cart .menu-item__link').hover(function () {
    $('.slider-cart').addClass('cartActive');
  }, function () {
    $('.slider-cart').removeClass('cartActive');

  });

/// matchActive

$('.match span').click(function () {
  $(this).toggleClass('matchActive');
})

// paymentActive
$('.method span').click(function () {
  $('.method span').removeClass('paymentActive');
  $(this).addClass('paymentActive');
  $('.method .img').removeClass('paymentActive');
  $(this).siblings().addClass('paymentActive');
}) 

// close element

$('.oList li .status .fa-close').click(function () {
  $(this).parent().parent().addClass('liActive');
});




// USER CLICK LIST
// izb block
$('.userList ul li a:contains(Избранное)').click(function () {
    $('.user .container').removeClass('userActive');
    $('.user .izb').addClass('userActive');
});
// orderH block
$('.userList ul li a:contains(История)').click(function () {
  $('.user .container').removeClass('userActive');
  $('.user .orderH').addClass('userActive');
});
// address block
$('.userList ul li a:contains(Адрес)').click(function () {
  $('.user .container').removeClass('userActive');
  $('.user .address').addClass('userActive');
});
// add address block
$('.userList ul li a:contains(Способ)').click(function () {
  $('.user .container').removeClass('userActive');
  $('.user .addAddress').addClass('userActive');
});

// add new address block
$('.user .address-title a:contains(Добавить)').click(function () {
  $('.user .container').removeClass('userActive');
  $('.user .addAddress').addClass('userActive');
});


/// USER TABS
var back = $('.user .container .finish p');
  back.click(function () {
    $('.user .container').removeClass('userActive');
    $('.user .account').addClass('userActive');
  });


  //   TABS
   $('.tab-buttons span').click(function () {
    $('.tab-buttons span').removeClass('tabActive');
    $(this).addClass('tabActive');
    $('.section').removeClass('sectionActive');
    $(".section").eq($(this).index()).addClass('sectionActive');
  });






$(".cart-section").not(":first").hide();
$(".cart-tab__button").click(function() {
      $(".cart-tab__button").removeClass("cart-tabActive").eq($(this).index()).addClass("cart-tabActive");
    $('.cart-section').removeClass('sectionActive');
      $(".cart-section").hide().eq($(this).index()).show().addClass('sectionActive');
}).eq(0).addClass("cart-tabActive");





/// Calculating
var count=0;
// minus
$('.minus').click(function () {
    var price = $(this).parent().prev().find("span").text();
    Number(price);
    count--;
    $(this).next().text(count);
    var sum =$(this).parent().next().find("p>span").text();
    Number(sum);
    sum=sum-price;
    $(this).parent().next().find("p>span").text(sum);
});
// plus
$('.plus').click(function () {
  var price = $(this).parent().prev().find("span").text();
  Number(price);
  count++;
  $(this).prev().text(count);
  var sum = $(this).parent().next().find("p>span").text();
  Number(sum);
  sum = Number(sum)+Number(price);
  $(this).parent().next().find("p>span").text(sum);
});
// reset 
$('.reset').click(function () {
    $(this).parent().prev().find("p").text(0);
    $(this).prev().find("span").text(0);
    
})




 // hover 
 $('.cart-section__main ul li').hover(function () {
    $(this).find('.reset').css({
      'borderColor':'#8200FF',
      'color':'#8200FF'
    });
 },function () {
  $('.reset').css({
    'borderColor':'#C2C7D0',
    'color':'#C2C7D0'
  })
 });

 





});