(function ($) {
  var siteScript = {
    init: function () {
      this.stickyHeader();
    },

    stickyHeader: function () {

      $(window).on("scroll", function () {
        if ($(this).scrollTop() > 50) {
          $('header').addClass("sticky");
        } else {
          $('header').removeClass("sticky");
        }
      });
    },
  };

  siteScript.init();
})(jQuery);



