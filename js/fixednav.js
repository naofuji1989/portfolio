$(function() {
  var nav    = $('#rec_header'),
      offset = nav.offset();

  $(window).scroll(function () {
    if($(window).scrollTop() > offset.top + 0) {
      nav.addClass('is-fixed');
    } else {
      nav.removeClass('is-fixed');
    }
  });
});