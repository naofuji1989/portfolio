//ローディング
jQuery(document).ready(function() {
  $('.loading').fadeOut();
});


//スライダー
jQuery(document).ready(function() {
  $('#slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    fade:true,
    speed:2000,
    dots:false,
    arrows:false,
    centerMode: false,
    variableWidth:false,
    pauseOnHover:false
  });
});


/*カテゴリ部分スイッチ*/
jQuery(document).ready(function() {
  $(".tabswitch").each(function(){
    var set = $(this);
    var btn = set.find("ul.tabnav li a");
    var setpael = set.find("ul.tabnav li a.active");
    var panel = set.find(".tab_content .tab_panel");
    var setpanelID = $(setpael).attr("data-anchor");

    $(panel).hide();
    $(".tab_content .tab_panel"+setpanelID).show();

    $(btn).click(function(){
      $(btn).removeClass("active");
      $(this).addClass("active");
      $(panel).hide();
      $($(this).attr("data-anchor")).fadeIn("normal");
      return false;
    });
  });
});


//ページトップへ
jQuery(document).ready(function() {
  var headerHeight = $('.header').outerHeight();
  $('a[href^="#"]').not('.tab_link a').click(function(){
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "body" : href);
    var position = target.offset().top - headerHeight;
    $("body,html").animate({ scrollTop: position }, 500, "swing");
    return false;
  });
});


//アコーディオン
jQuery(document).ready(function() {
  $(".accordion > dt").click(function(){
    $(this).next("dd:not(:animated)").slideToggle('fast');
    $(this).toggleClass("active");
  });
});


/*固定ナビ*/
jQuery(document).ready(function() {
  var $body = $('body'),
      $nav = $('#header'),
      $change = $('#main'),
      changeOffsetTop = $change.offset().top;

  if($($nav).length){
    $(window).on('scroll', function () {
      if($(this).scrollTop() > changeOffsetTop) {
        $body.addClass('is-fixed');
      } else {
        $body.removeClass('is-fixed');
      }
    });
  }else{
    $body.addClass('is-fixed-page');
  }
});