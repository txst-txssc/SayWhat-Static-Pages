!function ($) {
  $(function(){

    // fix sub nav on scroll
    var $win = $(window),
        $nav = $('.subnav'),
        isFixed = 0;

    processScroll();

    $win.on('scroll', processScroll);

    function processScroll() {
      var i, scrollTop = $win.scrollTop();
      if (scrollTop >= 40 && !isFixed) {
        isFixed = 1;
        $nav.addClass('subnav-fixed');
      } else if (scrollTop <= 40 && isFixed) {
        isFixed = 0;
        $nav.removeClass('subnav-fixed');
      }
    }
  });
}(window.jQuery);